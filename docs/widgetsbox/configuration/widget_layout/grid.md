---
sidebar_label: 'Grid'
sidebar_position: 1
toc_max_heading_level: 3
---

# Widget Layout Grid

The following options are available for the Grid widget type:

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

### Grid Match

Select whether the grid items should be the same height. The default is ``Yes``.

### Match Target

*Only Available if Grid Match is set to ``Yes``*
Select the target (``Card`` or ``Card Body``) the grid items should be matched to. The default is ``Card``.

### Grid Divider

Select whether a divider should be displayed between the grid items. The default is ``Hide``.

## Cards

### Card Style

Select the style of the card. The default is ``Default``. Available options are:

- **Default** - The card will be displayed with the default style
- **Primary** - The card will be displayed with the primary style
- **Secondary** - The card will be displayed with the secondary style

<div class="alert alert--info">
  <strong>Note:</strong> The card stylings for default, primary and secondary is defined by the used 
UIkit Template or WidgetsBox if it should load UIkit.
</div>

### Card Size

Defines the Inner Padding of the Card. The default is ``Default``. Available options are:

- **Default** - The card will be displayed with the default padding
- **Small** - The card will be displayed with a small padding
- **Large** - The card will be displayed with a large padding

### Card Class

Place for your Custom Classnames for the Card. Multiple classnames can be separated by space

```
my-class another-class
```

### Card Body Class

Place for your Custom Classnames for the Card Body. Multiple classnames can be separated by space

```
my-class another-class
```

### Image Position

Select the position of the image. The default is ``Top``. Available options are:

- **Top** - The image will be displayed on top of the card
- **Bottom** - The image will be displayed at the bottom of the card
- **Left** - The image will be displayed on the left side of the card
- **Right** - The image will be displayed on the right side of the card

### Image Size

Select the size of the image. If the image is positioned on the left or right side, the following options are available:

- **Small** - The image will be displayed with a small size
- **Medium** - The image will be displayed with a medium size
- **Large** - The image will be displayed with a large size
- **20%** - The image will be displayed with a width of 20%
- **25%** - The image will be displayed with a width of 25%
- **33%** - The image will be displayed with a width of 33%
- **40%** - The image will be displayed with a width of 40%
- **50%** - The image will be displayed with a width of 50%
- **60%** - The image will be displayed with a width of 60%
- **66%** - The image will be displayed with a width of 66%
- **75%** - The image will be displayed with a width of 75%
- **80%** - The image will be displayed with a width of 80%
- **100%** - The image will be displayed with a width of 100%

If the image is positioned on the top or bottom side, the following options are available:

- **Small** - The image will be displayed with a small size
- **Medium** - The image will be displayed with a medium size
- **Large** - The image will be displayed with a large size
- **Auto** - The image will be displayed with the original ratio

### Scale to Fit

If not in Auto mode, the image will be scaled to fit the selected size. The default is ``Yes``.

## Animation

### Item Animation

Select the animation of the grid items. The default is ``None``. Available options are:

- **None** - The grid items will be displayed without any animation
- **Fade** - The grid items will be displayed with a fade animation
- **Scale** - The grid items will be displayed with a scale animation
- **Slide Top Small** - The grid items will be displayed with a slide top small animation
- **Slide Top Medium** - The grid items will be displayed with a slide top medium animation
- **Slide Top Large** - The grid items will be displayed with a slide top large animation
- **Slide Bottom Small** - The grid items will be displayed with a slide bottom small animation
- **Slide Bottom Medium** - The grid items will be displayed with a slide bottom medium animation
- **Slide Bottom Large** - The grid items will be displayed with a slide bottom large animation
- **Slide Left Small** - The grid items will be displayed with a slide left small animation
- **Slide Left Medium** - The grid items will be displayed with a slide left medium animation
- **Slide Left Large** - The grid items will be displayed with a slide left large animation
- **Slide Right Small** - The grid items will be displayed with a slide right small animation
- **Slide Right Medium** - The grid items will be displayed with a slide right medium animation
- **Slide Right Large** - The grid items will be displayed with a slide right large animation

### Repeat Animation

Select whether the animation should be repeated if the WidgetsBox Container re-enters the Viewport. The default
is ``No``.

### Item Animation Delay

The delay between the animations of the grid items. The default is ``80``.


## Multiple Images

The following options are to configure the multiple images feature. See
this [tutorial](/docs/widgetsbox/tutorials/multiple-images) for more information.
If you don't use the multiple images feature, you can ignore this section.

### Slideshow Type

Select the type of the slideshow. The default is ``Fade``. Available options are:

- **Fade** - The images will be displayed with a fade animation
- **Slide** - The images will be displayed with a slide animation
- **Push** - The images will be displayed with a push animation
- **Pull** - The images will be displayed with a pull animation

### Autoplay

Select whether the slideshow should be played automatically. The default is ``Yes``.

### (Autoplay) Interval

The interval between the slides. The default is ``4000``.