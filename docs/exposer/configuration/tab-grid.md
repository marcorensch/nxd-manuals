---
sidebar_label: 'Grid Tab'
sidebar_position: 7
toc_max_heading_level: 2
---

# Grid Tab
The Grid Layout is the second view besides the Slideshow View that can fully exploit the full potential and 
possibilities of the Exposer. The options on this page can be used to style the grid elements. For Exposer to work 
in Grid mode, the layout must be set to Grid (UIkit 3) in the Modules tab.
## Grid
### Columns
Number of columns for display on smartphones & small tablets
### Columns (Medium)
Number of columns for display on smartphones in landscape mode, tablets and notebooks
### Columns (Large)
Number of columns for display on large desktops
### Simple on Mobile
If this option is activated, grid elements (the articles) are displayed on mobile devices with only minimal 
information (title & badge).
### Column Spacing (Gutter)
Distance between the grid elements. The options available here are:
- Small
- Medium
- Large
- Collapse

### Grid Match
This option ensures that grid elements are rendered at the same height within a line regardless of their content.
> **Note:** If the Onload Animation "scale up" or "scale-down" is used, this option does not work correctly, because the 
> height of the individual elements is not defined in the DOM when the content is created.

### Grid Divider
This option defines whether a separator should be displayed between the grid elements.

## Grid Elements
### Element Type
The basic presentation of the articles within the grid. Here you can currently choose between a "default card" or an 
"image card".
### Element Hover Shadow
The strength of the mouseover effect to be applied. These effects are set via templates / classes and can be adjusted by CSS.
### Card Style
Only available if Element Type is set to default card
Here you can choose between the three available UIkit 3 card types (default / primary / secondary). The look & feel will 
be adapted to your configured style if you use a UIkit 3 template.
> **Note:** Only available if Element Type is set to default card


### Element Size
The padding of the individual grid element. The available options are:
- Small
- Medium
- Large
- None
### Element Image Cover Mode
Select whether the image should fill the entire area of the map. If this option is activated you don't have to 
worry about all images having the same aspect ratio. However, it is possible that parts of the image may be cut off.

### Image Container Height
Defines the height of the grid element. You can choose between the following options:
- Small
- Medium
- Large

### Custom CSS
Inline CSS instructions for the image within the element.

### Additional CSS Classes
Custom CSS classes for the grid element. The instructions can be noted in your template or custom.css file.

### Badge Alignment
Badges in grid cards are placed at the top of each card. This option defines the horizontal alignment of the badge.

## Eyecatcher Configuration
Since version 1.1.5, the Exposer also supports the option to define an article as eye-catcher in the grid layout. 
This article is loaded on top and has a 100% width regardless of how many columns are configured. This lead article 
has its own set of configurations which are discussed in this section.

### Use Eyecatcher Article
Main switch for the usage of the eyecatcher function. The options below will be hidden if the Exposer 
Eyecatcher is not used.

### Eyecatcher Article
Defines which article should be used as an eye-catcher. Available options are:
- First Article of Set
- Custom Article

### Text Source
Where in the article should the text come from that is used in the Eyecatcher? 
The following options are currently available:
- do not display text 
- Article Introtext 
- Article Fulltext 
- Article Intro & Fulltext 
- Customfield

### Remove HTML
Define if HTML tags should be removed from the text.

### Truncate to
Limits the number of characters for output within the text block. If HTML tags are not removed they will be included. 
Unclosed HTML tags (due to shortening) are automatically closed.

### Container Tag
HTML attribute of the text block.

### Content Alignment
Alignment of the content within the text block.

### Additional CSS Classes
Own CSS classes for the text block. Several CSS classes can be entered separated by spaces.  
``my-class another-class``

### Image Width
The width of the image within the eyecatcher.

### Display Customfields
Should customfields be rendered in the eye-catcher? The configuration of the customfields depends on the general 
configuration of the customfields in the tab Modules.

## Animation

### Onload Animation
Animation of the li elements, thanks to the UIkit 3 integration you can choose from a wide range of animations. 
Currently, the following animations are available:
- Fade
- Scale (up/down)
- Slide (up/down/left/right) (small, medium)

## Animation Delay
The delay in milliseconds for the animation of the li elements. The delay is added to the previous element.

## Badges
Badges are rendered by the values of the articles URL A/B/C field.

### Badge Positions
The position of the badge. The following positions are available:
- Top Left
- Top Right
- Bottom Left
- Bottom Right

### Badge CSS Classes
Custom CSS class names for the Badge element container. Multiple classes can be entered separated by spaces. 
The classes can be defined by your template or in your custom.css of the template.

## Grid Elements Overlay
> **Note:** Only available if Grid Element Type is set to Image Card

### Overlay Type
This option defines the type of the overlay and its positioning. The following options are available:
- Disabled
- Bottom
- Top
- Center
- Cover

### Overlay Style
Overlay style based on the UIkit 3 styling options. You can choose between the standard LAyout which normally renders 
a light overlay or Primary which renders a dark overlay. The overlay style can change depending on the selected 
UIkit 3 template.

### Overlay Animation
The animation of the overlay at mouseover. If this option is activated, the overlay is only shown on mouseover 
with the selected animation method.

### Additional CSS Classes for Overlay
Custom CSS classes for the overlay of the grid elements. Multiple classes can be entered separated by spaces.
```
my-class another-class
```