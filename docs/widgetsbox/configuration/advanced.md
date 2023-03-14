---
sidebar_label: 'Advanced'
sidebar_position: 10
toc_max_heading_level: 3
---

# Advanced

This section describes advanced options for the module. In the Advanced Tab you can find the following options:

## Load UIkit

Select whether the UIkit library should be loaded by this module instance or not. UIkit only needs to be loaded once -
if your template is based on the UIkit 3 Framework you can turn this option off. The default is ``Yes``.

## UIkit Version

Select the UIkit version that should be loaded by the module. A scoped Version of UIkit 3 is included too if required.

> *Using a scoped version of UIkit allows you to limit styles to only apply to a certain part of your document.* [^1]

## Load Font Awesome

Select whether the Font Awesome library should be loaded by this module instance or not. The module will load Font
Awesome 5.x from the CDN. The default is ``No``.

## Debug Information

Select whether debug information should be displayed or not. The default is ``No``.

## Check Image Path

Checks and fix image paths if needed. Disable this if you have problems with the visibility of images on subdomains.

## Module Class

Add a custom CSS class to the module. This can be used to style the module with custom CSS. Multiple classes can be separated by a space.
```
my-custom-class another-class
```


[^1]: [UIkit Documentation](https://getuikit.com/docs/avoiding-conflicts#scope-mode)