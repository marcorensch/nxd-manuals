---
sidebar_label: 'Layouts (Modes)'
sidebar_position: 1
toc_max_heading_level: 2
---

# Layouts (Modes)

The Oriel Image Gallery comes with four templates / layouts for displaying your images. We currently distinguish
between:

- **Ignore** - The images are displayed in a grid layout, Subfolders got ignored.
- **Flat** - The images are displayed in a grid layout, Subfolders got used.
- **Abum** - Every Subfolder is displayed as an album.
- **Filtered** - The images are displayed in a grid layout, Subfolders got used. The user can filter the images by the
  subfolder name.

Checkout the

## Ignore Layout

Yes I know "ignore" does not sound like a good name for a layout / template. But in terms of behaviour it hits the nail
on the head. If the Ignore mode is selected, only the images within the defined directory are displayed within Oriel.
Images in subfolders are completely ignored.

## Flat Layout

In the Flat Layout, all images in the main directory of the Oriel Dynamic Gallery, as well as all images in all
subdirectories are displayed on one level. You can also choose whether the individual folders should be displayed as a
grouped grid.

## Album Layout

The album layout is only selectable in Oriel Pro and is something very special, our heart is our icing on the cake.
Okay, I digress. In album mode, the folders within the directory you define are considered albums. Oriel's frontend
shows you an overview of these folders in a grid view, including folder titles in an overlay. Clicking on the folder
will take you to the images in that gallery. Check? Okey an example:

The folder structure on our FTP server looks like this:

```text
    /images/oriel
    ├───album1
    │   ├───image1.jpg
    │   ├───image2.jpg
    │   ├───cover.jpg
    │   │
    │   ├───subfolder1
    │   │   ├───image1.jpg
    │   │   ├───image2.jpg
    │   │   └───image3.jpg
    │   │
    │   └───subfolder2
    │       ├───image1.jpg
    │       ├───image2.jpg
    │       └───image3.jpg
    │  
    └───album2
        ├───image1.jpg
        ├───image2.jpg
        └───cover.jpg
```

In our module we have defined the folder ``/images/oriel`` as base folder / source. In Album Mode all folders inside the
base folder are now considered albums. Thus the folders `album1` & `album2` are displayed as albums in the frontend. The
Subfolders listed inside album1 can be used as Filter in the frontend.
The screenshot below shows the frontend view of the module in Album Mode, every Item is a Subfolder:

<img src="/img/oriel/oriel-album-overview.png" alt="Oriel Album Overview" className="bordered" />

Clicking on the album `album1` will take you to the images in that gallery. The screenshot below shows the frontend view
of the module after clicking on an Album:

<img src="/img/oriel/oriel-album-insight.png" alt="Oriel Album View" className="bordered" />

## Filtered Layout

As you may have already seen in the [Playground](https://demo.nx-designs.com/index.php/orielpro/oriel-playground),
albums are equipped with additional subfolders, which serve as
optional filters. However, this layout also exists as a separate template for Oriel. The same folder is displayed in
Filter Mode:

<img src="/img/oriel/oriel-filtered.png" alt="Oriel Filtered Overview" className="bordered" />