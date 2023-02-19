---
sidebar_label: 'Slideshow Tab'
sidebar_position: 5
---

# Slideshow Tab
In Slideshow mode, your articles are displayed in an animated slideshow, the options in this tab control the display & 
allow you to customize the look and feel of Exposer to your site. You activate the slideshow by selecting Layout 
Slideshow (UIkit 3) in the module tab of this module.

## Animation
The type of animation / transitions between slides. Available animations are:
- Fade
- Slide
- Scale
- Push 
- Pull 


## Autoplay
Should the slideshow itself switch to the next slide?

## Interval
Autoplay Intervall in Miliseconds

## Pause on Hover
Should Autoplay be stopped when the mouse pointer is inside the Exposer module?

## Height Viewport
Should the slideshow be displayed full screen? (Exposer always uses 100% of the available width of the parent element) -
This option defines whether 100% of the screen height should be used.

## Min Height
The minimum height of the Exposer element in pixels.

## Slideshow Container Ratio
The aspect ratio of the slideshow container. May be overwritten on small or medium viewports by the minimum 
container size configuration (above).

## Badge Position
The position of the badge in the slideshow. The available options are:
- None
- Slide
- Overlay

### Badge Position (Overlay & Slide)
The orientation of the badge. The available options are:
- left
- center
- right

### Custom CSS Classes for Badge Container
Custom CSS class names for the Badge element container. Multiple classes can be entered separated by spaces.
``my-class another-class``

## Overlay Configuration

### Overlay Type
The Exposer slideshow has two overlay types Full or Default. With Default, the positioning of the overlay can also be selected.

### Overlay Style
The UIkit 3 based style of the overlay. May vary depending on the template. In UIkit 3 Default Template the default 
style is light and the primary is dark.

### Overlay Width
> **Note:** Only available if Overlay Type is set to Default

Here you can select the width of the Overlay relative to the width of the Exposer Module. Available options are:
- small
- medium
- large
- 1/4
- 1/3
- 1/2
- full width
- auto

### Overlay Margin
The overlay can be distanced from the Exposer Slideshow Container by a margin. Available options for the margin are:
- small
- medium
- large
- none

### Overlay Padding
The overlay can be distanced from the Exposer Slideshow Container by a padding. Available options for the padding are:
- small
- medium
- large
- none

### Overlay Position
The overlay can be positioned in the overlay type Default at different locations within the slideshow. 
The following positions are currently available:
- top
- top-left
- top-right
- left (full-height)
- center-left
- center
- right (full-height)
- center-right
- bottom
- bottom-left
- bottom-right

### Overlay Animation
The overlay animation is triggered after a change of slides. Currently, the following animation types are available:
- Fade
- Scale (up/down)
- Slide (up/down/left/right) (small, medium)
- Push (up/down/left/right) (small, medium)
- Pull (up/down/left/right) (small, medium)
- None

### Overlay Animation Delay
Time until the overlay is displayed. Attention a too small value can cause the animations of the slide and 
the overlay to overlap.

### Custom CSS Classes for Overlay Container
Custom CSS classes that are applied to the overlay. Multiple classes can be separated by spaces. 
``my-class another-class``


