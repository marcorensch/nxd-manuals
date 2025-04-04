---
sidebar_label: 'Layout'
sidebar_position: 2
toc_max_heading_level: 3
---

# Layout

This Section describes how to configure the layout of the module. Here we list all options in the Layout Tab of the
module settings.

## Design

First, you can select which layout is to be used for the module in this tab.
The following options are available:

- Grid
- List
- Buttons

## Grid Layout

### Grid Columns

Select how many columns should be displayed for the respective screen size.
The module uses the standard UIkit viewport sizes for differentiation:

- Devices with a viewport smaller than 640px
- **s** for devices with a viewport of 640px and larger
- **m** for devices with a viewport of 960px and larger
- **l** for devices with a viewport of 1200px and larger
- **xl** for devices with a viewport of 1600px and larger

For each viewport size, between 1 and 6 columns can be defined for the layout.

### Grid Size (Gap)

Define the size of the distance between the grid elements. default = Add this class to apply a medium gap with a
breakpoint. medium = Add this class to apply a medium gap like the default one, but without a breakpoint.

### Grid Match

Select whether the elements in the same row should all have the same height.

### Flex Direction

The general flex (horizontal alignment) of the grid elements. The module uses the standard UIkit viewport sizes for
differentiation:

- Devices with a viewport smaller than 640px
- **s** for devices with a viewport of 640px and larger
- **m** for devices with a viewport of 960px and larger
- **l** for devices with a viewport of 1200px and larger
- **xl** for devices with a viewport of 1600px and larger

For each viewport size, you can define if the items should not be flexed, flexed to left, center or to the right.

### Grid Attributes

Custom HTML Attributes can be entered here. Note: Will be placed in the wrapper div container of the grid for better
flexibility (parent element of div.nxd-grid-container).

For example, to add a Scrollspy effect (UIkit Scrollspy) you could add here:

```html
uk-scrollspy="target:>.nxd-grid-container > div; cls: uk-animation-slide-bottom-small; delay: 30"
```

[Learn more about UIkit Scrollspy Options](https://getuikit.com/docs/scrollspy)

### Element Style

Define the element style for the grid elements. Available options based on the UIkit Styles are:

- None
- Default
- Primary
- Secondary

### Element Padding

Set the padding for the elements. Available options are:

- Default
- Small
- Large

The Pixel Value for these options are defined by your UIkit template.

### Box Shadow

Base box shadow for elements. Available options are:

- None
- Small
- Medium
- Large
- XLarge

The Pixel Value and other options (color / opacity) for these options are defined by your UIkit template.

### Hover Box Shadow

Hover box shadow for elements. Available options are:

- None
- Small
- Medium
- Large
- XLarge

The Pixel Value and other options (color / opacity) for these options are defined by your UIkit template.

### Element Custom Classes

Custom CSS classes for the elements. Multiple class names separated by space.

```
my-classname another-custom-class
```

### Download Option on Card

This option allows you to display a download button directly on the map element in order to be able to use a direct
download and a lightbox link together on the grid element.

### Download Button Style

The styling of the download button. Available options are:

- Default
- Primary
- Secondary
- Text
- Link

### Download Button Size

The size (padding) of the download button, available options are:

- Default
- Small
- Large

### Download Button Width

The width of the download button, available options are:

- Auto
- Small
- Medium
- Large
- 100%
- 83%
- 75%
- 66%
- 50%
- 33%
- 25%
- 20%

## List Layout

### List Style

Here you can select the style of the list. Currently, there are three options available:

- Default
- Divider
- Striped

### List Size Modifier

Define the gap of the list items. Currently, there are three options available:

- Default
- Collapsed
- Large

### Content Size Modifier

Define the size (padding) of the list items. Currently, there are three options available:

- Default
- Small
- Large

### Use Hover Scale

If this option is enabled, the list items will be scaled up on hover.

## Buttons Layout

### Buttons Display

Choose in which form the buttons should be placed inside the container. Available options are:

- One Column
- Flex

:::info

Please note that the **Flex** Buttons Layout only has an effect if the button width is not set to 100% and several
buttons can be
displayed on one line.

:::

### Gap

Define the gap between the button elements. Available options are:

- Collapse
- Small
- Medium
- Large

### Button Type

Choose the design of the buttons. Available options are:

- Default
- Primary
- Secondary
- Text
- Link

### Button Size Modifier

Select the size (padding) of the buttons. Available options are:

- Small
- Default
- Large

### Button Width Modifier @s / @m

Define the width of the buttons inside the container for small and larger devices. Smartphones in portrait mode always
falls back to one Column layout.

- Auto
- Small
- Medium
- Large
- 100%
- 83%
- 75%
- 66%
- 50%
- 33%
- 25%
- 20%

### Buttons Alignment

How should the buttons be aligned? Options are:

- Left
- Center
- Right

### Truncate Label

Should the label be abbreviated / truncated if not all the text can be displayed within one line inside the button?

## Icons

Icons are generally available in all layouts. The module uses FontAwesome 6 in the free version. If your template
already includes FontAwesome 6, you can deactivate the implementation of FontAwesome in the advanced module settings. If
your template does not load FontAwesome, you must activate this option in the "Advanced" tab so that icons are
displayed.

### Show Icons

If this option is enabled, FontAwesome (free) icons will be displayed according to the supported file types. For this
function FontAwesome must be included by the template or this module. To have FontAwesome (free) loaded by this module
please check the corresponding option in the Advanced tab.

### Icon Ratio

The icon size can be defined here for the various viewport sizes.

- Devices with a viewport smaller than 640px
- **s** for devices with a viewport of 640px and larger
- **m** for devices with a viewport of 960px and larger
- **l** for devices with a viewport of 1200px and larger
- **xl** for devices with a viewport of 1600px and larger

The icon ratio values 1x - 10x are available for each viewport size.

### Icon Padding

Define the padding for the icons, available options are:

- None
- x-small
- small
- large

### Icon Classes

Custom CSS classes for the icons. Multiple class names separated by space.

```
my-class another-custom-class
```

## General options

These options are available in all layouts.

### Show Filetype Label

If this option is enabled, the file type will be displayed as a label.

### Show File Date

Display the creation / modify date of the files. Please Note that this option could show the wrong date (Modification
Date not Creation Date). This is a known limitation on some systems.

### Show File Extension

If this option is activated, the file name including the file type is displayed.

### Group Title Tag

The HTML Tag used for the Group Title. Groups can be defined when using multiple watched folders in Pro Version.

### Group Title Class

The CSS Class used for the Group Title. Groups can be defined when using multiple watched folders in Pro Version.

### Custom Item Class

Custom CSS classes for the elements. Multiple class names separated by space. 