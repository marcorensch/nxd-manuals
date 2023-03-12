---
sidebar_label: 'URLx Setup'
sidebar_position: 7
toc_max_heading_level: 3
---

# URLx Setup

This module can fetch the additional URL fields from your articles. You can set up more than one field as Link or Badge
but only the latest option will be used. The module handels just not set, _parent or _blank configuration for links. If
you activate here URL A and URL C as Link and both fields contains a Link only the Link of C will be used.

Every described option below is identical for URL A, URL B and URL C. The only difference is the name of the field.
Please be aware that the module will only fetch the fields if they are set in the module settings AND they have a URL
set up. If you set up URL A & C as Link the latest option will be used. See examples below for more information.

## URLx Options

### URL Configuration

- **Use as Link**: If this option is activated the URL will be used as Link.
- **Use as Badge Information**: If this option is activated the URL will be used as Badge Information.

### Target Window

- **Get from Field (Modal & PopUp handled as _blank)**: The target window will be fetched from the field.
- **_parent**: The target window will be set to _parent.
- **_blank**: The target window will be set to _blank.
- **auto**: All external links(http...) will be opened in a new window while internal links are opened in the parent window.

### Display

Should the URL be only used as Link or also as Tag on the item. Options are:
- **No optical Marker**: The URL will be used but not displayed as Tag.
- **Display as Tag**: The URL will be used and displayed as Tag.

### Text Source

The text source defines where the text for the tag will be fetched from. Options are:
- **Article URL Title**: The title of the article will be used.
- **Module**: The text will be fetched from the module settings - see below.

### Text for Badge

Your Custom Text that will be used in Tags / Badges for Elements with a configured URL field.

<div class="alert alert--warning">
<b>Note:</b> It's important to understand that this URLx Settings are working in a "<i>last one wins</i>" way.<br/>
See Introduction for more information.
</div>

## Examples

An article has the following URL fields set up:

- URL A: https://search.brave.com/
    - Label: Brave
- URL B: https://www.google.com
    - Label: Google
- URL C: https://www.bing.com
    - Label: Bing

### All fields are set up as Link

The module is set up as follows:

- URL A:
    - Use as Link
    - Display as Tag
    - Text Source: Article URL Title
- URL B:
    - Use as Link
    - Display as Tag
    - Text Source: Article URL Title
- URL C:
    - Use as Link
    - Display as Tag
    - Text Source: Article URL Title

The result will be that the module shows only up the URL C as Link and Tag.

### URL A & C are set up as Link

The module is set up as follows:

- URL A:
    - Use as Link
    - Display as Tag
    - Text Source: Article URL Title
- URL B:
    - Ignore
- URL C:
    - Use as Link
    - Display as Tag
    - Text Source: Article URL Title

The result will be that the module shows only up the URL C as Link and Tag.

### URL A is set as Badge Info and URL C as Link

The module is set up as follows:

- URL A:
    - Badge Only Information
    - Display as Tag
    - Text Source: Article URL Title
- URL B:
    - Ignore
- URL C:
    - Link
    - **No optical Marker**

The result will be that the module uses URL C as Link and URL A as Badge Info.

### URL A is set as Badge Info, URL C as Link & Text from Module

*This options makes not much sense but it is possible.*
The module is set up as follows:

- URL A:
    - Badge Only Information
    - Display as Tag
    - Text Source: **Module**
    - Text for Badge: *Custom Text*
- URL B:
    - Ignore
- URL C:
    - Link
    - **No optical Marker**

The result will be that the module uses URL C as Link and URL A as Badge Info but uses the String *Custom Text* as Badge Text.

<div class="alert alert--warning">
<b>Note:</b> It's important to understand that this URLx Settings are working in a "<i>last one wins</i>" way.
</div>
<br />
<div class="alert alert--primary">
<b>Hint:</b> It might be preferable to only set up one URL field and play with the options to understand the logic of this feature.
</div>