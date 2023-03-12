---
sidebar_label: 'Slider'
sidebar_position: 2
toc_max_heading_level: 3
---

# Widget Layout Slider

The Slider widget type allows you to display your items in a slider. The following options are available for the Slider widget type:


## Columns

### Columns

Affects all device widths, grid columns stay side by side. Can be overridden by the following options.

### Columns@s

Affects device widths of 640px and larger. Can be overridden by the following options.

### Columns@m

Affects device widths of 960px and larger. Can be overridden by the following options.

### Columns@l

Affects device widths of 1200px and larger. Can be overridden by the following options.

### Grid Size (Gap)

The size of the gap between the grid items. You can select between the following options:

- **Collapse** - The grid items will be placed next to each other without any gap
- **Small** - The grid items will be placed next to each other with a small gap
- **Default** - The grid items will be placed next to each other with a medium gap
- **Large** - The grid items will be placed next to each other with a large gap

## Slides

### Cover Mode

Select if the slides should be displayed in cover mode. Cover mode means that the slides will cover the available space.

### Image Height

If Cover Mode is enabled, you can define the height of the images aka Slides with this option. You can select between
the following options:

- **Small** - The images will be displayed with a small height
- **Medium** - The images will be displayed with a medium height
- **Large** - The images will be displayed with a large height

### Center Slides

Select if the slides should be centered. If you have an odd number of slides, the active slide will be in the center. If
you have an even number of slides, there will be one slide on the left and one slide on the right of the active slide.

### Autoplay

Select if the slides should be played automatically. The default is ``Yes``.

### Autoplay Interval

The interval between the slides. The default is ``4000``.

### Pause On Hover

Select if the autoplay should be paused if the mouse is hovering over the slider. The default is ``Yes``.

### Infinite Scrolling (Loop)

Select if the slides should be scrolled infinitely. The default is ``Yes``.

### Slide Sets

Should the slides be displayed in sets? If yes all slides of a set will be displayed at once. The default is ``No``.
Sets are equal to the number of columns.

### Slider Offset

This option defines if there should be an offset on the slider container. The default is ``No``.

## Slider Controls

### Slide Controls

Select the Position of the slide controls. The default is ``center``. Available options are:

- **disabled** - No controls will be displayed
- **top** - The controls will be displayed on the top of the slider (left arrow top left / right arrow top right)
- **center** - The controls will be displayed in the center of the slider (left arrow center left / right arrow center
  right)
- **bottom** - The controls will be displayed on the bottom of the slider (left arrow bottom left / right arrow bottom
  right)
- **top-left** - The controls will be displayed on the top left of the slider
- **top-right** - The controls will be displayed on the top right of the slider
- **bottom-left** - The controls will be displayed on the bottom left of the slider
- **bottom-right** - The controls will be displayed on the bottom right of the slider
- **above-left** - The controls will be displayed outside on the top of the slider
- **above-right** - The controls will be displayed outside on the top of the slider
- **above** - The controls will be displayed outside in the center of the slider
- **below-left** - The controls will be displayed outside on the bottom of the slider
- **below-right** - The controls will be displayed outside on the bottom of the slider
- **below** - The controls will be displayed outside in the center of the slider

### Slide Control Style

Select the style of your slide controls - the Styling is defined by the used UIkit Template. The default is ``auto``.
Available options are:

- **auto** - The controls will be displayed with the default style of the used UIkit Template
- **light** - The controls will be displayed with the light style of the used UIkit Template
- **dark** - The controls will be displayed with the dark style of the used UIkit Template

### Dotnav

Select if & where the dotnav should be displayed. The default is ``below``.

- **hide** - No dotnav will be displayed
- **above** - The dotnav will be displayed on the top of the slider
- **below** - The dotnav will be displayed in the below of the slider

## Content (Slides)

### Content Mode

Select the Base-Type of the content. Available options are:

- **Overlay** - The content will be displayed as an overlay on the image
- **Card** - The content will be displayed as a card element

### Overlay Mode Options

The Following options are only available if the Content Mode is set to ``Overlay``

#### Overlay Style

Select the style of the overlay. The default is ``default``. Available options are:

- **default** - The overlay will be displayed with the default style of the used UIkit Template
- **primary** - The overlay will be displayed with the primary style of the used UIkit Template
- **not set** - The overlay will be displayed without any styling (Best for Custom CSS)

#### Overlay Position

Select the position of the overlay. The default is ``bottom``. Available options are:

- **top** - The overlay will be displayed on the top of the image
- **bottom** - The overlay will be displayed on the bottom of the image
- **cover** - The overlay will cover the image

#### Overlay Transition

Select the transition of the overlay. An active transition means that the overlay will be hidden until the Transition
Trigger got activated. The default is ``disabled``. Available options are:

- **disabled** - The overlay will be displayed all the time
- **on hover** - The overlay will be displayed on hover
- **on slide** - The overlay will be displayed on slide

#### Overlay Transition Type

Select the transition type of the overlay. The default is ``slide bottom``. Available options are:
- **slide top** - The overlay will be displayed with a slide top animation
- **slide bottom** - The overlay will be displayed with a slide bottom animation
- **slide left** - The overlay will be displayed with a slide left animation
- **slide left small** - The overlay will be displayed with a small slide left animation
- **slide left medium** - The overlay will be displayed with a medium slide left animation
- **slide right** - The overlay will be displayed with a slide right animation
- **slide right small** - The overlay will be displayed with a small slide right animation
- **slide right medium** - The overlay will be displayed with a medium slide right animation
- **slide top** - The overlay will be displayed with a slide top animation
- **slide top small** - The overlay will be displayed with a small slide top animation
- **slide top medium** - The overlay will be displayed with a medium slide top animation
- **slide bottom** - The overlay will be displayed with a slide bottom animation
- **slide bottom small** - The overlay will be displayed with a small slide bottom animation
- **slide bottom medium** - The overlay will be displayed with a medium slide bottom animation
- **fade** - The overlay will be displayed with a fade animation
- **scale up** - The overlay will be displayed with a scale up animation
- **scale down** - The overlay will be displayed with a scale down animation

### Card Mode Options
The Following options are only available if the Content Mode is set to ``Card``

#### Match Item Height

Select if the height of the cards should match and which target to match. The default is ``Card`` which leads to items with identical heights.
Available options are:
- **No** - The height of the cards will not be matched
- **Card** - The height of the cards will be matched
- **Card Body** - The height of the card bodies will be matched

### Content Style

Select the style of the content. The default is ``auto``. Available options are:
- **auto** - The content will be displayed with the default style of the used UIkit Template
- **light** - The content will be displayed with the light style of the used UIkit Template
- **dark** - The content will be displayed with the dark style of the used UIkit Template

### Content Padding

Select the padding of the content. The default is ``default``. Available options are:
- **small** - The content will be displayed with a small padding
- **default** - The content will be displayed with the default padding
- **large** - The content will be displayed with a large padding

### Item Class

Add a custom class to the items. This can be used to add custom CSS. Multiple classes can be added by separating them with a space.
```
my-class another-class
```

### Content Class

Add a custom class to the content. This can be used to add custom CSS. Multiple classes can be added by separating them with a space.
```
my-class another-class
```