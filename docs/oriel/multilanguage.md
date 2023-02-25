---
sidebar_label: 'Language Overrides'
sidebar_position: 4
toc_max_heading_level: 3
---

# Language Translation Integration

<p class="lead">
In OrielPro you can easily set the labels of folders & images using the Joomla! language overrides.
</p>

However, it is important to understand how it works, here is a short explanation. In OrielPro you can use language
overrides and our Custom Rules (**Advanced Prettyfier**) in combination, which opens up great possibilities but can
sometimes get a bit complicated.

| **Folder Name**  | **Custom Rule**                                                | **String after Prettyfier** | **Language Key** |
|------------------|----------------------------------------------------------------|-----------------------------|------------------|
| my_First_Folder  | <span class="badge badge--primary">Replace "_" with " "</span> | my First Folder             | MY FIRST FOLDER  |
| my_Second_Folder | <span class="badge badge--primary">NONE</span>                 | my_Second_Folder            | MY_SECOND_FOLDER |

In fact the sequence is "Prettyfier rules" before language overrides, if the string (image filename or folder name) is
adjusted by the Prettyfier this must be considered in the Language Key.

By using the Language Overrides you can name your albums based on the user language (DE: Autos, FR: voitures, EN:
cars, ...). But please note that this does not change the order of the albums / pictures

## Learn How to use the Language Overrides
Learn how to use language overwrites in this official Joomla! help article: 
- [Language Overrides J4](https://docs.joomla.org/Help40:Language_Overrides)
- [Language Overrides J3](https://docs.joomla.org/J3.x:Language_Overrides_in_Joomla)