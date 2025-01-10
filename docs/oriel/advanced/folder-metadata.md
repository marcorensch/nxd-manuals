---
title: Folder Metadata
sidebar_position: 1
---

Oriel also supports extended options which are defined in a `folder.json` in the corresponding subfolder.

## Placement of the folder.json

Such an instruction is **optional** and can / must be defined for each subfolder:

```plaintext title="Placement of the folder.json"
    /images/oriel
    ├─── album1
    │   ├─── image1.jpg
    │   ├─── image2.jpg
    │   ├─── cover.jpg
    // highlight-next-line
    │   ├─── folder.json
    │   │
    │   ├─── subfolder1
    │   │   ├─── image1.jpg
    │   │   ├─── image2.jpg
    │   │   └─── image3.jpg
    // highlight-next-line
    │   │   └─── folder.json
    │   │
    │   └─── subfolder2
    │       ├─── image1.jpg
    │       ├─── image2.jpg
    │       └─── image3.jpg
    // highlight-next-line
    │       └─── folder.json
    │  
    └─── album2
        ├─── image1.jpg
        ├─── image2.jpg
        └─── cover.jpg
        // highlight-next-line
        └─── folder.json
```

:::info 
the `folder.json` file will be **auto generated** containing information for all images by the module if the album gets 
rendered in the frontend.
:::

## Content of a folder.json

```json title="Example Content of a folder.json"
{
  ...
  "image1.jpg": {
    "extUrl": "https://www.nx-designs.ch",
    "extUrlTitle": false,
    "description": false
  },
  "image2.jpg": {
    "extUrl": "https://www.example.com",
    "extUrlTitle": false,
    "description": false
  },
  ...
}
```

### Structure for Image Metadata
```json title="Image Metadata in Detail"
"image_n.jpg": {
    "extUrl": "https://www.nx-designs.ch",
    "extUrlTitle": false,
    "description": false
  }
```

- **extUrl** false or a String containing the URL
- **extUrlTitle** false or a string containing the URL Title
- **description** false or a string containing the Image Description (will be visible in the Lightbox)

:::note
To display a Link Icon on the Image you need also to turn the option "Show Link Symbol" in the Module Settings
in the Tab **Thumbnail & Lightbox** to **yes**
:::

:::note
To show the given description the module supports different options in the **Thumbnail & Lightbox** section: 
"Yes, with Fallback" which shows the image title if no description is given or "Yes, without Fallback" which shows no 
further information in the Lightbox.
:::