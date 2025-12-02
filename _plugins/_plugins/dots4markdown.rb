module Jekyll
  module Converters
    class Markdown
      class Dots4Markdown
        # Tag mappings - add more as needed
        TAG_MAP = {
          's' => 'section',
          'd' => 'div',
          'a' => 'article',
          'n' => 'nav',
          'h' => 'header',
          'f' => 'footer',
          'as' => 'aside'
        }
        
        DEFAULT_TAG = 'div'
        
        def initialize(config)
          @config = config
        end
        
        def convert(content)
          process_dots4_syntax(content)
        end
        
        private
        
        def process_dots4_syntax(content)
          # Normalize line breaks to \n
          content = content.gsub(/\r\n/, "\n").gsub(/\r/, "\n")
          
          lines = content.split("\n")
          result = []
          tag_stack = []
          i = 0
          consecutive_blank_lines = 0
          
          while i < lines.length
            line = lines[i]
            
            # Track consecutive blank lines
            if line.strip.empty?
              consecutive_blank_lines += 1
            else
              # Check if we had an empty line (meaning 2 line breaks total)
              if consecutive_blank_lines >= 1
                # Close all auto-closeable tags
                close_auto_tags(result, tag_stack)
              end
              consecutive_blank_lines = 0
            end
            
            # Check if this is an dots4 syntax line
            if line =~ /^::([+\/]?)([a-z]*)([\.\#][^\@]*)?(@.*)?$/
              directive = $1
              tag_char = $2
              selectors = $3 || ''
              attributes = $4 || ''
              
              # Remove @ symbol from attributes
              attributes = attributes[1..-1] if attributes.start_with?('@')
              
              if directive == '/'
                # Closing tag
                close_tag(result, tag_stack, tag_char)
              else
                # Opening tag
                keep_open = (directive == '+')
                tag_name = tag_char.empty? ? DEFAULT_TAG : (TAG_MAP[tag_char] || DEFAULT_TAG)
                
                # Parse selectors (classes and id)
                classes, id = parse_selectors(selectors)
                
                # Build opening tag
                tag_attrs = build_attributes(classes, id, attributes)
                result << "<#{tag_name}#{tag_attrs}>"
                
                # Track tag for auto-closing
                unless keep_open
                  tag_stack << { tag: tag_name, line: i, auto_close: true }
                else
                  tag_stack << { tag: tag_name, line: i, auto_close: false }
                end
              end
              
              i += 1
              next
            end
            
            result << line
            i += 1
          end
          
          # Close any remaining open tags
          while tag_stack.any?
            tag_info = tag_stack.pop
            result << "</#{tag_info[:tag]}>"
          end
          
          result.join("\n")
        end
        
        def parse_selectors(selector_string)
          classes = []
          id = nil
          
          # Split by . and # while preserving the delimiters
          parts = selector_string.scan(/[\.#][^\.#]+/)
          
          parts.each do |part|
            if part.start_with?('.')
              classes << part[1..-1]
            elsif part.start_with?('#')
              id = part[1..-1]
            end
          end
          
          [classes, id]
        end
        
        def build_attributes(classes, id, extra_attrs)
          attrs = []
          
          attrs << "id=\"#{id}\"" if id
          attrs << "class=\"#{classes.join(' ')}\"" if classes.any?
          
          # Parse extra attributes
          if extra_attrs && !extra_attrs.empty?
            # Split by comma, but not commas inside quotes
            attr_parts = extra_attrs.scan(/(?:[^,"]|"(?:\\.|[^"])*")+/)
            attr_parts.each do |attr|
              attr = attr.strip
              attrs << attr unless attr.empty?
            end
          end
          
          attrs.any? ? ' ' + attrs.join(' ') : ''
        end
        
        def close_tag(result, tag_stack, tag_char)
          if tag_char.empty?
            # Close the most recent tag
            if tag_stack.any?
              tag_info = tag_stack.pop
              result << "</#{tag_info[:tag]}>"
            end
          else
            # Close specific tag type
            tag_name = TAG_MAP[tag_char] || DEFAULT_TAG
            
            # Find and close the matching tag
            index = tag_stack.rindex { |t| t[:tag] == tag_name }
            if index
              # Close all tags from this point
              tags_to_close = tag_stack[index..-1].reverse
              tags_to_close.each do |tag_info|
                result << "</#{tag_info[:tag]}>"
              end
              tag_stack.slice!(index..-1)
            end
          end
        end
        
        def close_auto_tags(result, tag_stack)
          # Close all auto-closeable tags from the top of the stack
          while tag_stack.any? && tag_stack.last[:auto_close]
            tag_info = tag_stack.pop
            result << "</#{tag_info[:tag]}>"
          end
        end
      end
    end
  end
end

# Register the custom converter
Jekyll::Hooks.register :site, :pre_render do |site|
  # Store reference to original converter
  site.config['original_markdown_converter'] = site.find_converter_instance(Jekyll::Converters::Markdown)
end

Jekyll::Hooks.register [:pages, :documents], :pre_render do |doc|
  if doc.content && (doc.extname == '.md' || doc.extname == '.markdown')
    dots4 = Jekyll::Converters::Markdown::Dots4Markdown.new(doc.site.config)
    doc.content = dots4.convert(doc.content)
  end
end