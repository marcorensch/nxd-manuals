---
sidebar_label: '💲 Lightbox'
sidebar_position: 3
toc_max_heading_level: 2
---

# Lightbox

The Lightbox is a feature of the **professional version** of this module. It allows to display the supported filetypes
in a lightbox.

:::info

The Lightbox can not support PDF files on <b>mobile devices</b>. This is due to the fact that the
PDF files
are for security reasons got opened in a new browser window / tab and no longer inside an iFrame. Some mobile Browsers
shows an image of the first page of the PDF. This is **not** a bug of this module.

:::

When the Lightbox Feature is enabled you can add a comma-separated list of file extensions to the module settings to
define which file types
should be displayed in the lightbox. For example: `jpg, jpeg, png, gif, svg`.

Additionally, you can define the size of the lightbox Caption as well as if there should be a download button displayed.

<img src="/img/agiledownloads/lightbox_preview_setup.png" alt="Agile Downloads Lightbox Module Settings" className="bordered" />

## Enable / Disable Lightbox Support for different Filetypes

Click on an effective file type or the group to activate the lightbox for the corresponding file type(s).

## Use Office Document Types in Lightbox

In order to display Office documents, an external service provider is required to display these documents. The
corresponding documents are then displayed in an iFrame. Important: These documents are uploaded to the corresponding
provider when they are displayed. The documents should therefore not contain any sensitive or secret data / personal
data. This function is only available for unprotected directories. NXD declines all liability. Check carefully whether
your documents may be sent to external services (according to selection & possibly abroad) for processing. The
respective data protection information of the external provider applies.

## Lightbox Options

### Lightbox Caption

Select lightbox caption style. Available options are:

- hidden
- small
- default
- large
- lead

### Show Download in Lightbox

If the lightbox is activated for a file type, the file is no longer downloaded directly "on click" but the document is
displayed in a lightbox. This option allows you to define whether these files can then be downloaded within the lightbox
via a link. Note: This is not a security mechanism. Every file that is displayed to the visitor can also be downloaded. 

### Download Button Style

The design of the download button in the lightbox description. Available options are:

- Default
- Text
- Link
- Button Default
- Button Primary
- Button Secondary


#### Custom CSS Example for white Button Text Color

:::info

Since buttons in the UIkit framework are *actually* / normally not displayed in a lightbox caption, there are no suitable CSS
classes for this. As a result, depending on the template settings, the text in the button may not be legible or may be
difficult to read. In this case, you must use your own CSS overrides to ensure that the text color in the button is
correct.

:::

```css
a.nxd-lightbox-file-link{
    color:#ffffff; /* or #000000 for black */
}
```

[Use HtmlColorCodes to find a suitable color](https://htmlcolorcodes.com/)

### Download Button Size

Size of the download button in the lightbox description. Available options are:

- Small
- Medium
- Large

### Show Download Icon

Should an additional download icon be displayed within the lightbox (Requires FontAwesome support)?

