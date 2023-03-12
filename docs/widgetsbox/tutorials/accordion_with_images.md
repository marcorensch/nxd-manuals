---
sidebar_label: 'Accordion with Images'
sidebar_position: 3
toc_max_heading_level: 3
---

# Accordion with Images

The Accordion Widget allows you to display the image of the selected source image
together with the title as Accordion title. This short tutorial shows you some possibilities to use this option.

How to add a new module instance is explained in another tutorial, here it's about choosing the Accordion widget,
setting a filter to display the articles of a category and how to use the desired image (or fallback) as Accordion
title, together with the title text.

## Basic Setup

We set the basic settings of the module as shown in the screenshot, we select "Accordion" as widget, in the Image Source
field we define which image from the articles should be used, the intro image or the full text image. As text content we
choose intro text, but of course you can also choose full text. Just be aware that you may have to disable the "Prepare
Content" option when loading content into the Accordion:

<img src="/img/tutorials/widgetsbox/widgetsbox_acc_w_images_basic.png" alt="Basic Setup for WidgetsBox Accordion" className="bordered" />
<p class="text-center meta">Basic Setup for WidgetsBox Accordion - Screenshot taken in J3 also valid for J4</p>

## Set Filters to define which articles should be loaded

With the filter settings in the **Filter Options** tab you define where the WidgetsBox should get the articles from,
what
should be taken into account and which articles should not be displayed. You can find a separate article about filters
in the WidgetsBox in this manual. Today we set a relatively simple filter:

<img src="/img/tutorials/widgetsbox/widgetsbox_filter_electric_cars.png" alt="Filter Settings for WidgetsBox Accordion" className="bordered" />
<p class="text-center meta">Filter Setup for WidgetsBox Accordion - Screenshot taken in J3 also valid for J4</p>

As I said, a simple filter, we set the "Count" to 0, if a number other than 0 is selected, this represents the limit, so
5 for five articles for example. Then we have to choose a category, in our case I chose the category "Electric Cars",
because there I put a short "intro text" in the demo content and an intro picture in the article.

## Style the Widget

In the next step, we switch to the **Widget Layout** tab. Here we *style* our Accordion widget. Depending on the widget
you
selected at the beginning, there are different options available here. The following options are available for the
Accordion. In the screenshot you can already see a first configuration example:

<img src="/img/tutorials/widgetsbox/widgetsbox_acc_widgetslayout_a.png" alt="Style Settings for WidgetsBox Accordion" className="bordered" />
<p class="text-center meta">Style Settings for WidgetsBox Accordion - Screenshot taken in J3 also valid for J4</p>

I would like to draw your attention to the fact that we have selected ``Title`` as the **Image Position**, only then
will the
image be displayed in the Accordion title. If Title is selected as position, further options appear with which you can
define the image size for the different device types. From general to desktop screen sizes you can adjust them
separately. The format of the image is controlled by the "Media Ratio" option. The example above creates the Accordion
layout shown here:

<img src="/img/tutorials/widgetsbox/widgetsbox_accordion_a_frontend.png" alt="Accordion with Images" className="bordered" />
<p class="text-center meta">Accordion with Images</p>

Of course, we can still experiment with some class names and settings, what I want to show you is the image
class ``uk-border-circle`` if we use this with a media ratio of ``1:1`` we can generate something like this:

<img src="/img/tutorials/widgetsbox/widgetsbox_circle_large_frontend.png" alt="Accordion with rounded Images" className="bordered" />
<p class="text-center meta">Accordion with rounded Images</p>

Hui! ok we have the circle but the images are a bit too big for me... Let's try to turn down the width of the images (
currently 25%) a little and choose as an option ``xxsmall`` in each case:

<img src="/img/tutorials/widgetsbox/widgetsbox_circle_ok_frontend.png" alt="Accordion with rounded Images" className="bordered" />
<p class="text-center meta">Accordion with rounded Images</p>

## One more thing - Media Ratio

The option for the aspect ratio defines the effective height of the images, this field can contain a ``1:1`` (which means an
aspect ratio with the same height / width) or also classic aspect ratios like ``16:9``. If you enter a ``0`` in the field the
image will not be *cropped* which can be shown very well in this example here, as you can see every image has a
different aspect ratio and will be displayed with the width ``xxsmall``:

<img src="/img/tutorials/widgetsbox/WidgetsBox_Acc_ImageRatio_zero.png" alt="Accordion with Images" className="bordered" />

## Conclusion

In this short tutorial we have seen how to set a simple filter for a category, how to select the image source and how to
style the Accordion a bit. Play around with the settings a bit and as always, have fun!