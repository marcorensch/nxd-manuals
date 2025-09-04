---
sidebar_label: 'Slideshow'
sidebar_position: 3
toc_max_heading_level: 3
---

# Widget Layout Slideshow

The following options are available for the Slideshow widget type:

## Slideshow Ratio

Select the ratio of the slideshow. The default is ``16:9``.

## Min Height

The minimum height of the slideshow in Pixels. The default is ``300``.

## Slide Animation

Select the animation of the slides. The default is ``Fade``. Available options are:

- **Fade** - The slides will be displayed with a fade animation
- **Slide** - The slides will be displayed with a slide animation
- **Push** - The slides will be displayed with a push animation
- **Pull** - The slides will be displayed with a pull animation
- **Scale** - The slides will be displayed with a scale animation

## Ken Burns Effect

Select if the Ken Burns effect should be enabled and its direction. The default is ``Disabled``. Available options are:

- **Disabled** - The Ken Burns effect is disabled
- **Left** - The Ken Burns effect is enabled and the images will be moved from right to left
- **Top Left** - The Ken Burns effect is enabled and the images will be moved from right to left
- **Top** - The Ken Burns effect is enabled and the images will be moved from bottom to top
- **Top Right** - The Ken Burns effect is enabled and the images will be moved from left to right
- **Right** - The Ken Burns effect is enabled and the images will be moved from left to right
- **Bottom Right** - The Ken Burns effect is enabled and the images will be moved from bottom to top
- **Bottom** - The Ken Burns effect is enabled and the images will be moved from top to bottom
- **Bottom Left** - The Ken Burns effect is enabled and the images will be moved from top to bottom
- **Center** - The Ken Burns effect is enabled and the images will be moved from the corners to the center

## Autoplay

Select whether the slideshow should be played automatically. The default is ``Yes``.

## Autoplay Interval

The interval between the slides. The default is ``4000``.

## Pause On Hover

Select whether the slideshow should be paused when the mouse is hovering over the slideshow. The default is ``Yes``.

## Container Class

Custom CSS class for the container of the slideshow. Multiple classes can be added by separating them with a space.

```
my-class another-class
```

## Item Class

Custom CSS class for the items of the slideshow. Multiple classes can be added by separating them with a space.

```
my-class another-class
```

## Controls

### Slide Controls

Select the Position of the slide controls. The default is ``center``. Available options are:

- **disabled** - The slide controls are disabled
- **top** - The slide controls are displayed at the top of the slideshow
- **top left** - The slide controls are displayed at the top left of the slideshow
- **top right** - The slide controls are displayed at the top right of the slideshow
- **center** - The slide controls are displayed at the center of the slideshow
- **bottom** - The slide controls are displayed at the bottom of the slideshow
- **bottom left** - The slide controls are displayed at the bottom left of the slideshow
- **bottom right** - The slide controls are displayed at the bottom right of the slideshow
- **above** - The slide controls are displayed above the slideshow
- **above left** - The slide controls are displayed above left of the slideshow
- **above right** - The slide controls are displayed above right of the slideshow
- **below** - The slide controls are displayed below the slideshow
- **below left** - The slide controls are displayed below left of the slideshow
- **below right** - The slide controls are displayed below right of the slideshow

### Large Modifier

Select the size of the slide controls. Enable the large modifier to display the slide controls in a larger size. The
default is ``Yes``.

### Dotnav

Select the Position of the dot navigation. The default is ``below``. Available options are:

- **hide** - The dot navigation is disabled
- **above** - The dot navigation is displayed at the top of the slideshow
- **below** - The dot navigation is displayed at the below the slideshow

## Overlay

### Overlay Position

Select the position of the overlay. The default is ``right``. Available options are:

- **left** - The overlay is displayed at the left of the slideshow
- **right** - The overlay is displayed at the right of the slideshow
- **top** - The overlay is displayed at the top of the slideshow
- **bottom** - The overlay is displayed at the bottom of the slideshow
- **center** - The overlay is displayed at the center of the slideshow
- **top left** - The overlay is displayed at the top left of the slideshow
- **top right** - The overlay is displayed at the top right of the slideshow
- **bottom left** - The overlay is displayed at the bottom left of the slideshow
- **bottom right** - The overlay is displayed at the bottom right of the slideshow
- **center** - The overlay is displayed at the center of the slideshow
- **cover** - The overlay is displayed at the center of the slideshow and covers the whole slideshow

### Base Overlay Width / Visibility

Defines the width of the overlay. Affects device widths of 639px and smaller. Available options are:

- **100%** - The overlay has a width of 100%
- **75%** - The overlay has a width of 75%
- **66%** - The overlay has a width of 66%
- **50%** - The overlay has a width of 50%
- **33%** - The overlay has a width of 33%
- **25%** - The overlay has a width of 25%
- **20%** - The overlay has a width of 20%
- **16%** - The overlay has a width of 16%
- **hidden** - The overlay is hidden

### Overlay Width@s

Defines the width of the overlay. Affects device widths of 640px and larger. Available options are:

- **100%** - The overlay has a width of 100%
- **75%** - The overlay has a width of 75%
- **66%** - The overlay has a width of 66%
- **50%** - The overlay has a width of 50%
- **33%** - The overlay has a width of 33%
- **25%** - The overlay has a width of 25%
- **20%** - The overlay has a width of 20%
- **16%** - The overlay has a width of 16%

### Overlay Width@m

Defines the width of the overlay. Affects device widths of 960px and larger. Available options are:

- **100%** - The overlay has a width of 100%
- **75%** - The overlay has a width of 75%
- **66%** - The overlay has a width of 66%
- **50%** - The overlay has a width of 50%
- **33%** - The overlay has a width of 33%
- **25%** - The overlay has a width of 25%
- **20%** - The overlay has a width of 20%
- **16%** - The overlay has a width of 16%

### Overlay Width@l

Defines the width of the overlay. Affects device widths of 1200px and larger. Available options are:

- **100%** - The overlay has a width of 100%
- **75%** - The overlay has a width of 75%
- **66%** - The overlay has a width of 66%
- **50%** - The overlay has a width of 50%
- **33%** - The overlay has a width of 33%
- **25%** - The overlay has a width of 25%
- **20%** - The overlay has a width of 20%
- **16%** - The overlay has a width of 16%

### Overlay Margin

The margin of the overlay. The default is ``small``. Available options are:

- **None** - The overlay has no margin
- **Small** - The overlay has a margin of 10px
- **Medium** - The overlay has a margin of 20px
- **Large** - The overlay has a margin of 30px

### Overlay Transition

The transition of the overlay. The default is ``none``. Available options are:

- **None** - The overlay has no transition
- **Fade** - The overlay fades in
- **Slide Top** - The overlay slides in from the top
- **Slide Top small** - The overlay slides in from the top
- **Slide Top medium** - The overlay slides in from the top
- **Slide Bottom** - The overlay slides in from the bottom
- **Slide Bottom small** - The overlay slides in from the bottom
- **Slide Bottom medium** - The overlay slides in from the bottom
- **Slide Left** - The overlay slides in from the left
- **Slide Left small** - The overlay slides in from the left
- **Slide Left medium** - The overlay slides in from the left
- **Slide Right** - The overlay slides in from the right
- **Slide Right small** - The overlay slides in from the right
- **Slide Right medium** - The overlay slides in from the right
- **Scale up** - The overlay scales up
- **Scale down** - The overlay scales down

### Overlay Design

The design of the overlay. The default is ``Overlay default``. Available options are:

- **Overlay default** - The overlay has the default design
- **Overlay primary** - The overlay has the primary design
- **Overlay** - The overlay has the Overlay design
- **Tile default** - The overlay has the default tile design
- **Tile primary** - The overlay has the primary tile design
- **Tile secondary** - The overlay has the secondary tile design

<div class="alert alert--info">
    <b>Please Note:</b> the Styling of the overlay is based on the selected UIkit Template or relates to the default UIkit Template if loaded by the <code>WidgetsBox</code> extension.
</div>
<br/>

### Overlay Class

Custom CSS class for the overlay. Multiple classes can be added by separating them with a space.

```
my-class another-class
```

### Content Style

The style of the content. The default is ``auto``. Available options are:

- **Auto** - The content has the default style
- **Light** - The content has the light style
- **Dark** - The content has the dark style

<div class="alert alert--info">
    <b>Please Note:</b> the Styling of the content is based on the selected UIkit Template or relates to the default UIkit Template if loaded by the <code>WidgetsBox</code> extension.
</div>
<br/>

### Content Padding

The padding of the content. The default is ``small``. Available options are:

- **None** - The content has no padding
- **Small** - The content has a padding of 10px
- **Medium** - The content has a padding of 20px
- **Large** - The content has a padding of 30px

## Parallax Effect

The parallax effect can be enabled by setting the ``Use Parallax Effect`` option to ``Yes``.
The parallax effect is based on the [UIkit Parallax](https://getuikit.com/parallax) component.
The Parallax effect can be setted up for the following elements:

- **Title** - The title of the slideshow element
- **Category** - The category of the slideshow element
- **Tags** - The tags of the slideshow element
- **Ddescription** - The description of the slideshow element
- **Customfields** - The customfields of the slideshow element
- **Link** - The link of the slideshow element

The following options can be defined for each of these elements:

### Effect Direction

The general direction of the effect for all elements. The default is ``horizontal``. Available options are:

- **Vertical** - The effect is vertical
- **Horizontal** - The effect is horizontal

### Effect Strength

The value of the effect strength. For ``start,middle,end`` For example ``-200,0,200``. Leave empty for no effect.

### Scale Effect

The value of the scale effect. For ``start,middle,end`` For example ``1,1.2,1``. Leave empty for no effect.

### Opacity Effect

In addition to the parallax shift effect you can also adjust the visibility of the element, the format '
start,middle,end‘ applies here too, for example: '0.3,1,0'. Leave empty for no opacity effect.