---
sidebar_label: 'Settings'
title: 'Settings'
sidebar_position: 99
toc_max_heading_level: 3
---

## General

### Show List Filters by default

Set this option to yes so that the filters are visible by default in the list views if filters are available.

## Checker

### Max Execution Time

Overrides the maximum time in seconds that the PHP script may run before an error is thrown. If problems occur when 
checking an extremely large file, this value can be increased.

## Translator

![Config Screen Translator Tab](./_assets/config_translator.png)

### DeepL API Key

Enter here your DeepL API Key to translate language files with this component. **Your API Key will be stored encrypted** 
in your component settings. [Click here](https://support.deepl.com/hc/en-us/articles/360020695820-API-Key-for-DeepL-s-API) 
to learn how to get an API Key.

### Usage

Only visible after you have entered your API Key and Saved the Settings.
This field shows you how much of your monthly character quota you have already used.
The limit is defined by DeepL and depends on your API key. **Joomet has no implemented limit**.

### Language Cache

After you have entered an API key and saved the component settings, you still need to update the language cache here.
This action checks which languages are available for translation at DeepL.

### Ignore Empty Rows

If enabled empty rows want to show up for translation - but they still got copied to the new language file.

### Ignore Comments

If this option is activated, lines with comments are not displayed in the translation overview. These are copied to 
the new language file in the original language.

## Permissions

At this point, access is controlled by user group. Individual options such as the export of checker reports, the 
ability to check or translate files can be deactivated here for individual user groups if required.
