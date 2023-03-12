---
sidebar_label: 'Module'
sidebar_position: 2
toc_max_heading_level: 3
---

# Module Options

## Select Widget

First of all you can select the type of Widget you want to use. There are currently the following Widgets integrated:

- Grid
- Slider
- Slideshow
- List
- Accordion
- Switcher

Each of these options leads to different available options in the ``Widget Layout`` Tab.

## Title Source

Currently, there is only one option to select a title from, the Article title.

## Image Source

The Image Source Field defines where WidgetsBox primarily will look for images for your articles. Select here your main
Image Field based on the available options:

- none
- Intro Image
- Full Text Image
- Custom Field

### Custom Field

If you have selected ``Custom Field`` as Image Source you can here select the Custom Field that holds your article's
image. Alternatively you can also select here a Custom Field of Type ``Subform`` that contains images. That way you can
have a nice looking slider in supported Widgets (List / Grid).
See [this Article](/docs/widgetsbox/tutorials/multiple-images) if you want to know more about this feature.

## Alternative Image Source

If no image has been found for an article in the selected field above the module can check a secondary place as "in
article fallback" and use this image if there is one. Select here where the module should have a look in secondary for
an image.

## Fallback Image

If things are going wild and there is still no image available you can define here a "general" fallback image for all
items wihtout image.

## Text Source

The Widgets can also show an Introduction Text on cards, rows or overlays. Select here where this text should be taken
from.

### Custom Field

If you have selected ``Custom Field`` as Text Source you can here select the Custom Field that holds your article's
Introduction Text.

## Text Limit (characters)

As the title describes - Limit your introduction texts to a fixed amount of characters. Put in a "0" if you don't want
to truncate your introduction texts.

## Remove Textstyling

All texts have tags or styles setted up, activate this option to let WidgetsBox remove those styling attributes from
your texts while they got displayed inside the module.

## Prepare Content

Prepare Content will enable the onContentPrepare plugins event for the content. This enables you to run content
plugins (e.g. loadModule, email cloaking, etc) within WidgetsBox.

## Use Search Filter

The search filter is a simple solution to filter the displayed content. Based on an input field, the elements that do
not match the search string are hidden. 
