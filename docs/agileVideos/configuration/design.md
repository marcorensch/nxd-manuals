---
sidebar_label: 'Design Tab'
sidebar_position: 4
toc_max_heading_level: 3
---

# Design

Here you can select the design of module. You can choose between the following options:
- ``Grid``: The default design of the module where the video posters are displayed in a grid.
- ``Slider``: The video posters are displayed in a slider.

## Grid

### Columns

Here you can select the number of columns for the grid. You can choose from one to six columns.
This option defines the number of columns for tiny screens (e.g. mobile phones).

### Columns@s

Here you can select the number of columns for the grid. You can choose from one to six columns.
This option defines the number of columns for small screens (e.g. tablets).

### Columns@m

Here you can select the number of columns for the grid. You can choose from one to six columns.
This option defines the number of columns for medium screens (e.g. laptops).

### Columns@l

Here you can select the number of columns for the grid. You can choose from one to six columns.
This option defines the number of columns for large screens (e.g. desktops).

### Custom Grid Class

Here you can enter a custom CSS class for the grid container. This class will be added to the grid.
You can add multiple classes by separating them with a space.

```
my-class another-class
```

### Grid Gap Size

Here you can select the gap size between the grid items. You can choose from the following options:
- ``Collapse``: No gap between the grid items.
- ``Small``: Small gap between the grid items.
- ``Medium``: Medium gap between the grid items.
- ``Large``: Large gap between the grid items.

## Slider

### Columns

Here you can select the number of columns for the slider. You can choose from one to six columns.
This option defines the number of columns for tiny screens (e.g. mobile phones).

### Columns@s

Here you can select the number of columns for the slider. You can choose from one to six columns.
This option defines the number of columns for small screens (e.g. tablets).

### Columns@m

Here you can select the number of columns for the slider. You can choose from one to six columns.
This option defines the number of columns for medium screens (e.g. laptops).

### Columns@l

Here you can select the number of columns for the slider. You can choose from one to six columns.
This option defines the number of columns for large screens (e.g. desktops).

### Center Slides

Here you can select if the slides should be centered inside the module.

### Grid Gap Size

Here you can select the gap size between the slider items. You can choose from the following options:
- ``Collapse``: No gap between the grid items.
- ``Small``: Small gap between the grid items.
- ``Medium``: Medium gap between the grid items.
- ``Large``: Large gap between the grid items.


### Show Slidenav

Here you can select if the slidenav should be displayed.

### Slidenav Outside

Here you can select if the slidenav should be displayed outside the module.

### Slidenav Color Mode

Here you can select the color mode of the slidenav. You can choose from the following options:
- ``Auto``: The default color mode of the slidenav.
- ``Light``: The light color mode of the slidenav.
- ``Dark``: The dark color mode of the slidenav.

### Autoplay

Here you can select if the slider should autoplay.

### Autoplay Interval

Here you can select the interval of the autoplay in Miliseconds.

### Pause On Hover

Here you can select if the autoplay should be paused on hover.

### Infinity Slider

Here you can select if the slider should be infinite.

### Slider Sets

Here you can select if the slider should slide in sets. If enabled all visible slides will be moved at once.

## Item Layout

### Thumbnail Ratio

Here you can define the ratio of the video poster. A valid Ratio is a number followed by a colon and another number.
For example ``16:9`` or ``4:3``.

### Border Radius

Here you can select if the video poster should have a border radius. Available options are:
- ``None``: No border radius.
- ``Circle``: A circle border radius - best if used with square images / Ratio of 1:1.
- ``Rounded``: A rounded border radius.

### Item Class

Here you can enter a custom CSS class for the video poster. This class will be added to the video poster. You can add multiple classes by separating them with a space.

```
my-class another-class
```

### Show Video Title

Here you can select if the video title should be displayed.

### Video Title Position

Here you can select the position of the video title. Available options are:
- ``Above``: The video title is displayed on top of the video poster.
- ``Below``: The video title is displayed on bottom of the video poster.
- ``Overlay``: The video title is displayed on top of the video poster with a dark overlay.

### Overlay Specifics

#### Overlay Position

Here you can select the position of the video title overlay. Available options are:
- ``Top``: The video title overlay is displayed on top of the video poster.
- ``Bottom``: The video title overlay is displayed on bottom of the video poster.
- ``Left``: The video title overlay is displayed on left of the video poster.
- ``Right``: The video title overlay is displayed on right of the video poster.
- ``Cover``: The video title overlay is displayed on top of the video poster and covers the whole poster.

#### Overlay Transition

Here you can select the transition of the video title overlay. Available options are:
- ``Disabled``: No transition.
- ``Fade``: A fade transition.
- ``Scale up``: A scale up transition.
- ``Scale down``: A scale down transition.
- ``Slide small left``: A small slide left transition.
- ``Slide small right``: A small slide right transition.
- ``Slide small top``: A small slide top transition.
- ``Slide small bottom``: A small slide bottom transition.
- ``Slide medium left``: A medium slide left transition.
- ``Slide medium right``: A medium slide right transition.
- ``Slide medium top``: A medium slide top transition.
- ``Slide medium bottom``: A medium slide bottom transition.
- ``Slide Top``: A slide top transition.
- ``Slide Bottom``: A slide bottom transition.
- ``Slide Left``: A slide left transition.
- ``Slide Right``: A slide right transition.

#### Overlay Style

Here you can select the style of the video title overlay. Available options are:
- ``Default``: The default style of the video title overlay.
- ``Primary``: The primary style of the video title overlay.
- ``Custom``: Adds the custom css classname ``uk-overlay-custom`` to the video title overlay without any stylings, you can use this option to style your own Overlay.
- ``Transparent``: The transparent style of the video title overlay.

### Title Container Class 

Here you can enter a custom CSS class for the video title container. This class will be added to the video title container. You can add multiple classes by separating them with a space.

```
my-class another-class
```

### Item Style

Here you can select the style of the video poster. Available options are:
- ``Default``: The default style of the video poster.
- ``Primary``: The primary style of the video poster.
- ``Secondary``: The secondary style of the video poster.

### Item Hover Shadow

Here you can select if the video poster should have a shadow on hover.

### Poster Timestamp

With this option you define at which timestamp of the videos the poster image should be taken. Please be aware that this only works with local hosted mp4 videos.

<div class="alert alert--info">
<b>Hint:</b> You can easily define your own posters by video. Just save a jpeg / png file with the same filename in the same folder path.
Example: my-video.mp4 and my-video.jpg
</div>



