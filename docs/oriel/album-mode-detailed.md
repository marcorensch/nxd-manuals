---
sidebar_label: 'Album Layout'
sidebar_position: 2
toc_max_heading_level: 2
---
# Album Layout

<p class="alert alert--primary">
The Screenshots in this article are taken on Joomla 3.x. On Joomla 4.x it looks a bit different but the steps remains the same.
</p>
As you probably already know, Oriel can not only display your images, but also create complete album overviews at the
touch of a button.

This article deals with what needs to be done to get such an overview like in this live example:

[Oriel Album Layout](https://demo.nx-designs.com/index.php/orielpro/album-layout/orielpro-album-demo-2)
In the example linked above, the folders of the first level are automatically defined as albums.
> **Attention:** Only folders with at least one image file are indexed - the cover.* file will always be ignored.

<img src="/img/oriel/oriel-album-overview.png" alt="Oriel Album Overview" className="bordered" />

## The Folder Structure

Oriel uses your folder structure to create galleries - so it's important that you think about how you want your gallery
to look when you create your folder structure.

The folders of the first level are defined as albums in the album overview. If there is an image within this folder with
the file name: cover.jpg, cover.png, cover.gif it will be used as album cover. You don't have to worry, the cover image
will not be shown in the gallery overview later. So if you want to define an explicit photo as cover, just copy it and
save it as cover.jpg/png/gif with the other images.

```
/images/gallery-folder
    ├───Animated/
    │   ├───description.txt
    │   ├───cover.jpg
    │   ├───image1.jpg
    │   ├───...
    ├───Calanda_Broncos__American_Football/
    │   ├───description.txt
    │   ├───cover.jpg
    │   ├───image1.jpg
    │   ├───...
    ├───Switzerland/
    │   ├───description.txt
    │   ├───cover.jpg
    │   ├───image1.jpg
    │   ├───...
    ├───tech/
    │   ├───description.txt
    │   ├───cover.jpg
    │   ├───image1.jpg
    │   ├───...
    ├───...
    ...
```

In the block above you can see how a gallery folder is built up that is used with Oriel. The additional files like
``cover`` or ``description`` for an album are stored within the same folder as the images.

## Set Module Parameters

Let us now move on to the basic settings in Oriel that were made for the example shown above:
First select in Base(Module) Tab, **Albums** as **Oriel Mode**. Various new additional options will then appear:

<img src="/img/oriel/albums_config.png" alt="Oriel Album Setup Options" className="bordered" />

Most of these options should be self-explanatory. However, I would like to mention the **Allow Filtering** option, when
this
option is activated folders within an album (i.e. folders in level 2) are used as filters within the album.

As soon as we use the Oriel Mode Albums we will find more additional options in the **Album View** tab. These fields
allows
you to define, for example, whether a head area should be displayed within the album or not. You will also find a
separate area
for editing the image grid: Columns for the different display sizes & size of the grid spacing.

In the Tab **Thumbnails & Lightbox** we can define the individual parameters for the thumbnails. Our example uses the
Thumbnails Mode **Cover** with **active AutoHeight** option and an aspect ratio of **1:1**.

<img src="/img/oriel/thumbnails_config.png" alt="Oriel Album Thumbnail Options" className="bordered" />

Finally, here are the additional / optional layout options:

<img src="/img/oriel/add_thumbnailoptions.png" alt="Oriel Album Additional Thumbnail Options" className="bordered" />

