---
sidebar_label: 'Modal Tab'
sidebar_position: 8
---

# Modal Tab
The integrated modal in Exposer helps you to fascinate your visitors. A list, grid or slideshow element can not only
link to the article, but also, if activated, provide a modal with further information about the article, possibly
eliminating the need to redirect to the article.
<br />
This option was designed so that Joomla! articles can no longer necessarily be understood as full-page articles on a
single topic. Rather, Exposer opens the door with the Modal function to do more than just make articles from the Article
component. Articles can also be people, devices or services with Exposer. In combination with other extensions that have
the same goal, a lot can be achieved with very little effort.

## General Configuration

### Modal Type
Choose which type of modal to use. The deck modal allows very complex structures, but should only be used in special cases.
only be used in special cases.

### Modal Size
The size of the modal, here the options default, container (wider) or fullscreen are available.

### Modal Container CSS
Own CSS classes for the modal container. These classes will be applied directly to the modal container.
Several classes can be entered separated by commas.

### Content Container Classes
Own CSS classes for the modal content. These CSS classes are applied to the inner area of the modal.
Several classes can be entered separated by commas.

## Title Configuration

### Modal Title Source
The source for the title within the modal

### Title Tag
The HTML tag to be used for rendering the title.

### Additional CSS Classes
Own CSS classes for the modal title. These CSS classes are applied to the inner area of the modal.
Several classes can be entered separated by commas.

## Image Configuration
### Image Source
The source for the image within the modal
### Custom CSS
Own CSS classes for the modal image. These CSS classes are applied to the img tag.

## Content Configuration
### Content Source
The source for the content within the modal
### Modal Content CSS Classes
Own CSS classes for the modal text. These CSS classes are applied to the inner area of the modal.
Several classes can be entered separated by commas.

## Customfields 1 Configuration
### Headertext
The optional header text for the customfields 1 area
### Custom CSS Classes for Title
Own CSS classes for the customfields 1 title.
Several classes can be entered separated by commas.
### Title Tag
The HTML tag to be used for rendering the title.
### Customfield Names
The names of the customfields to be displayed in the modal. Several names can be entered separated by commas.
``field-name-1, field-name-2, field-name-3``
### Additional CSS Classes
Own CSS classes for the customfields 1 content. These CSS classes are applied to the inner area of the modal.
Several classes can be entered separated by comma or spaces.
### Classes for Table
Own CSS classes for the customfields 1 table. These CSS classes are applied to the table tag.
Several classes can be entered separated by comma or spaces.
``custom-class-1, classname-2, customclass-3``
### Additional Attributes for Table
Additional attributes for the customfields 1 table. These attributes are applied to the table tag. 
Additional HTML attributes for the custom fields 1 Table values can be escaped by backslash ``\ ``
``data-custom-attribute="custom-value" data-custom-attribute-2="custom-value-2"``
### Display Labels
Display the labels for the customfields 1 values.

## Customfields 2 Configuration
### Customfield Names
Name of the custom fields to be rendered in this area. Multiple fields can be entered separated by semicolons. 
This field supports the extended rendering mode, currently the options are available:
### URL Field
```json
{
  "type":"url",
  "url":"fieldname_that_holds_url",
  "display":"fieldname_that_holds_label",
  "alt-display":"Aternative Textstring or Empty"
} [my-custom-css-class your-cust-css-cls]
```

### Linked Image Field
```json
{
  "type":"linkimage",
  "url":"fieldname_that_holds_url",
  "width":"100",
  "title":"fieldname",
  "img":"fieldname", 
  "imgclass":"my-custom-css-class"
} [my-custom-css-class your-cust-css-cls]
```
The instructions for the field rendering are written in curly brackets - to assign class names for the rendering to the 
respective field, square brackets can be used directly below.

