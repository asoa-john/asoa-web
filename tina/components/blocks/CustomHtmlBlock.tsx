import { tinaField } from "tinacms/dist/react";
// import { useEffect, useRef } from "react";

type CustomHtmlBlockProps = {
  block: any;
  blockKey: string | number;
  isGrouped?: boolean;
};

export default function CustomHtmlBlock({
  block,
  blockKey,
  isGrouped = false,
}: CustomHtmlBlockProps) {
  const blockClassName = block.className || "";
  const BlockTag = isGrouped ? "div" : "section";
  // const containerRef = useRef<HTMLDivElement | HTMLElement>(null);

  // useEffect(() => {
  //   // Set HTML on client side only to avoid hydration mismatch
  //   if (containerRef.current && block.html) {
  //     containerRef.current.innerHTML = block.html;
  //   }
  // }, [block.html]);

  return (
    <BlockTag
      key={blockKey}
      // ref={containerRef as any}
      className={`custom-html ${blockClassName}`}
      data-tina-field={tinaField(block, "html")}
      dangerouslySetInnerHTML={{ __html: block.html || "" }}
      // suppressHydrationWarning
    />
  );
}
