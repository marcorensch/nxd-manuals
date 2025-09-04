---
sidebar_label: 'Introduction'
sidebar_position: 1
toc_max_heading_level: 3
---

# Introduction

## What is HyperionHub?

HyperionHub is a powerful and flexible Hub for your Joomla! website. It allows you to create a Fixed Positioned
container of Link elements with different content like Joomla! Articles, Modules, or custom text. The Hub can be placed
on top / left / right / bottom of your website on a fixed position and can be styled
with different options to adapt your website's styling.

See Product Page [here](https://nx-designs.ch/ext/hyperionhub).

Extension Type: Joomla! Module

## Features (Free vs. Pro)

| <div className="columWide">Feature</div>                   |   Free    |    Pro    |
|:-----------------------------------------------------------|:---------:|:---------:|
| Joomla! Support                                            | 4.x / 5.x | 4.x / 5.x |
| Hub Items                                                  |     4     | Unlimited |
| Full Colorization                                          |     ✅     |     ✅     |
| 1500+ Fontawesome 6 Icons                                  |     ✅     |     ✅     |
| Icon Size Options                                          |     8     |    17     |
| Content Type Plain Text                                    |     ✅     |     ✅     |
| Content Type Editor                                        |     ✅     |     ✅     |
| Content Type Article                                       |     ❌     |     ✅     |
| Content Type Module                                        |     ❌     |     ✅     |
| Content Type Link                                          |     ❌     |     ✅     |
| Content Type Anchor                                        |     ❌     |     ✅     |
| Hub Position left                                          |     ✅     |     ✅     |
| Hub Position right                                         |     ✅     |     ✅     |
| Hub Position top                                           |     ❌     |     ✅     |
| Hub Position bottom                                        |     ❌     |     ✅     |
| Prepare Content [ℹ️](#prepare-content)                     |     ❌     |     ✅     |
| Item-based Publication [ℹ️](#item-based-publication)       |     ❌     |     ✅     |
| Item-based Access Support [ℹ️](#item-based-access-support) |     ❌     |     ✅     |

### Prepare Content

The Pro Version supports Joomla's Content Plugins. This means that you can use Joomla's Content Plugins in your Hub.
This allows you for example to use ShortCodes like `{loadmoduleid n}` in your content.

### Item-based Publication

Define for each item when it should be published (Publish up / Publish down). This allows you to define a start and end
date for each item inside your Hub.

### Item-based Access Support

Define the access level for each item. If the access level of the item is higher than the access level of the user the
item will not be shown.

:::info
For articles and modules the Publication & Access settings of the selected article or module will be used.
:::

## Requirements

- Joomla 4.x / 5.x
- PHP 8.3 or newer

## Installation

See [this article](/general/joomla/install-extension) for more information on how to download & install an
extension in Joomla!

## Automatic Updates

To receive automatic updates you need to have an active subscription for the product (free or paid). Additionally, you
need to have the nx-designs Framework Plugin installed on your Joomla! website. The Plugin will grant you access to the
update server. Learn more about the [nx-designs Framework Plugin](/general/download_id).