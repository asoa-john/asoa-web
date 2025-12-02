# Documentation

## Setup

To get started you will need to have the correct version of Ruby running on your system. Properly set up your dev environment, please follow the steps in [this Installation guide](https://jekyllrb.com/docs/installation/).

**important Notes**

- This project runs on Ruby `3.4.1` and may or may not run on other versions.
- When choosing a version manager, chruby has been a successful option for me.
- The requirements in the installation guide say to check your versions of GCC and Make. Apparently GCC `17.0.0` and Make `3.81` works, as those are the versions I had. There was no need for me to update or do anything with these.
- I am using a Mac computer for the above and have not tested this on any other OS.

## Commands

`jekyll serve`: To start the server and host the project locally.

## Markdown

This Jekyll install supports an enhanced markdown syntax where by HTML wrappers can be added using the dot4 identifier (::).

Example:

```
::+s.added-class#added-id
::
1. This is in a section.
And if I put text here, there's a break.

::
2. This is also in a section.
::/s
```

Renders as:

```
<section id="added-id" class="added-class">
  <div>
    1. This is in a section.
    And if I put text here, there's a break.
  </div>
  <div>
    2. This is also in a section.
  </div>
</section>
```

