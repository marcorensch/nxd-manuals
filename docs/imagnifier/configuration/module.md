---
sidebar_label: 'Module Tab'
sidebar_position: 1
toc_max_heading_level: 2
---

# Module

## Source Mode

Select the Source Mode of this module instance. Available modes are:

- **Static** - *Default*, Set Image and High-Res Image in the module config below
- **Dynamic** - Define Custom Fields that holds the image url for the default & hires image, use only one module
  instance in multiple articles.

*Hint:* See the Dynamic Tutorial to learn how the Source Mode function **Dynamic** works.

## Static Mode Options

### Image

Select the image that should be used on the page.

### HiRes Image

Select the image that should be used inside the magnifier lens.

## Dynamic Mode Options

### Image

Select the custom field that contains your image source. Only fields of the type Media are supported or field types
which save the image source (complete or relative URL) as value!

### HiRes Image

Select the custom field that contains your image source. Only fields of the type Media are supported or field types
which save the image source (complete or relative URL) as value!

## Lens Type

Select which type of lens should be displayed when hovering the image. The following options are available:

- **circle**
- **rectangle**

## Lens Size

Define the Lens size in Pixels (Diameter)

## Colour of Magnifier

The color of the magnifier frame.

## Magnifier Frame Size

The size (thickness) of the magnifier frame in pixels.

## Greyscale on Hover

Should the color saturation of the image be reduced on mouseover?

## Placeholder

Should an HTML container with the class nx-no-content be added as placeholder if no image is defined? Especially
usefully
for Dynamic Mode.

## Image CSS Classes

Additional CSS classes for the picture element. The container element can be extended with additional classes via module
class suffix (see Advanced Tab). 

