---
sidebar_label: 'Dynamic Source'
sidebar_position: 1
toc_max_heading_level: 2
---

# Dynamic Source

One of the most outstanding features of the iMagnifier is the ability to use dynamic sources to display the content.
This short tutorial will guide you through all the configuration steps needed to do this.

Dynamic sources allow you to use a single iMagnifier module instance for an unlimited number of articles with different
content. For example:

You have different products, they are listed on your site as single Joomla articles. Now you have to insert an image
with magnifier function for each of these products. This may take hours. *Not with iMagnifier!*

## Setup Overview

1. Create a custom field for the preview image (Type Media)
    - (optional) Create a custom field for the zoomed image (Type Media)
2. Create a new module instance of the iMagnifier
3. Select **dynamic** mode in the module options
4. Select your Custom Field for Preview & HiRes Image
5. Edit your articles, select the respective pictures for the preview and zoomed image
6. Place iMagnifier at the desired module position / inside the article

## Setup Step by Step

### Create a custom field for the preview image

First we have to create the required Custom Fiels (it doesn't matter if your Joomla articles already exist or if you
still have
to create them). To do so open the Fields Manager in Joomla backend and click on the **New** button.
The Fields Manager can be found in the Main Menu: **Content** > **Fields**.

<img src="/img/general/fields-j4.png" alt="Fields Manager in Joomla 4.x" className="bordered" />

Use the Button on the Top left to Add a new Field. As field type
we choose "Media" which allows us to select a BIld with the media manager later in the article editor. (Note: If you use
the JCE Media Manager you can also select the JCE File Browser (media) field).

<div class="alert alert--info">
<b>Sidenote:</b> All field types are supported that save the selected image as a value.
Plugins that support responsive viewing of images or compression cannot be used.
</div>

<img src="/img/general/image-media-field-j4-new.png" alt="New Field in Joomla 4.x" className="bordered" />

Above you see as an example the creation mask of my custom field for the Preview / Main Image. In this tutorial we don't
care about the column on the right, if you know how it works you can of course add the field to a group and / or assign
it to a category, but in our example we leave everything on default.

<div class="alert alert--warning">
<h3>Maybe Important:</h3><br/>When using Custom Fields in Joomla! Articles those fields normally also got rendered in the 
article view itself. If you don't want this, you can disable this in the field settings. Click on the tab <b>Options</b> and select <code>Do not automatically display</code> for the option <b>Automatic Display</b>
<img src="/img/general/field-no-auto-display-j4.png" alt="New Field in Joomla 4.x" className="bordered" />
</div>

### Create a custom field for the zoomed image (optional)

We now click on Save in the upper left corner, the new field is now displayed in the overview. If we now want to have
the possibility to define a second picture (for the HiRes in the article we just click on New again in the upper left
corner. Again, we select the field type Media and give the field a name to identify the field later.

## Create a new module instance of the iMagnifier

Nothing easier than that! Navigate via the Joomla! backend menu now via ``Extensions`` > ``Modules``in Joomla 3.x or via
Menu ``Content`` > ``Site Modules`` in Joomla 4.x into the module overview.
In this view you will find a list of all generated Joomla! modules. Now create a new module using the button new in the
upper left corner. As type choose iMagnifier from the list of extensions. If iMagnifier is not shown please make sure
that you have bought, downloaded and installed the iMagnifier module on this page.

<img src="/img/imagnifier/module-j4.png" alt="Module iMagnifier in Joomla 4.x" className="bordered" />

To use iMagnifier in dynamic mode simply select dynamic as source mode. After that the Image & HiRes Image fields will
be replaced by drop down lists that allow you to select the custom fields you created before. So now select the
previously created fields as sources for Image & HiRes Image. If you work with only one image you can either select
nothing in the HiRes Image field or use the same field as for Image. The result will be the same, the Main Image is also
used for zooming.

On this page you can also experiment with the settings for the color or size of the magnifier. Changes to the
configuration apply to all articles / positions where this module instance is used. A mouse-over over the individual
options shows you a small help text what the individual options do.

<div class="alert alert--warning">
<b>Don't Forget:</b> Set the Publishing options In the tab <b>Menu Assignement</b>. Publish the module on all pages and set the module to the status Published in the right column.
</div>

## Setup your Articles

In the last step we have to fill the Custom Fields in the respective articles with information, remember? The values of
the Custom Fields are used to display the image and the zoom and can be defined individually for each article. For this
we go back via the main menu: ``Content`` > ``Articles`` and edit an article that should hold our iMagnifier Module. The
screen below shows the article Edit view in Joomla 4.x. In the tab Fields you can now select the images for the Main and
HiRes Image.

<img src="/img/imagnifier/article-fields-media-j4.png" alt="Article Edit View in Joomla 4.x" className="bordered" />

To access this view, edit a Joomla! article and select the Fields tab above (if you have assigned your fields to a
group, the fields are listed in the tab of the same name). Now select a picture for the Main and HiRes here and save the
article.

## Place iMagnifier at the desired module position / inside the article

Now we have to place the iMagnifier module in the desired module position. If you have published the iMagnifier module
on a module position, you will now get iMagnifier with the corresponding image when you call the article in the
frontend. You can also call iMagnifier directly from within your article by switching to the content editor (tab
**Content**) and inserting iMagnifier as a module directly into your article. How to do that is explained in this
chapter: [How to insert a module into an article](/docs/general/joomla/article-handling-links#using-module-id-in-an-article).

## Troubleshooting

### The image is not displayed

If the image is not displayed, please check the following points:

- Is the image file in the correct format? (jpg, png, gif)
- Are the Custom Fields published?

### I can't select the Custom Field in the module settings

Check if the Custom Field is correctly published.

## Conclusion

<img src="/img/imagnifier/Article_Frontend_Finish.jpg" alt="iMagnifier in Joomla 4.x" className="bordered" />
<p class="meta text-center">Frontend View of iMagnifier in Action</p>

In this tutorial we have shown you how to use the iMagnifier module in Joomla 4.x in Dynamic Mode. You can now easily
create more articles and fill in the fields for Main & Zoom Image, if you insert the iMagnifier module in the
corresponding article, the information of the corresponding article is automatically used for the display, Dynamic!



