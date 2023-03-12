---
sidebar_label: 'Filter Options'
sidebar_position: 4
toc_max_heading_level: 3
---

# Filter Options

The WidgetsBox brings a powerful filter function that is modeled after the core Joomla modules. In this article we will
take a look at the individual options of this filter. With the filter you define which content the module should
dynamically load in the corresponding widget.

Let's dive into the available Filter Options.

## Count

Limits the number of items to be loaded. If there are 100 articles in the category and the value 0 is entered here, all
articles will be loaded. If the value 10 is entered, only 10 articles are loaded.

## Featured Articles

Show featured articles too, filter them out or show only featured articles

## Filter Type

Filter Type for Categories (next field) - Select wether the selected categories should be included or exluded in the
filter.

## Categories

Multiselect of all article categories of your page. Select the categories to be included or not in the search for the
articles you want to display (based on the filter type definition above).

## Subcategories

Define if subcategories should also be used, if yes you can define with the additional option how deep in subcategories
you want to search for items matching the filter.

## Tags

Select by which tags your articles should be filtered. If you select a tag here, only articles that have the
corresponding tag will be loaded.

## Author Filtering Type

Filter Type for Authors (next field) - Select if the selected authors should be included or exluded in the filter.

## Author

Select here the author(s) you want to filter for

## Author Alias Filtering Type

Filter Type for Author Alias (next field) - Select wether the selected author alias should be included or exluded in the
filter.

## Author Alias

Select here the author(s) alias you want to filter for

## Article ID's to exclude

Comma-separated list of all items that must not be loaded under any circumstances, even if the filter settings would
allow it.

## Date Filtering

The date filter is a powerful tool, you can define here that only articles of a certain time span or x-days back (
Relative) should be displayed. So if you set the date filter to Relative two additional fields appear, in the first you
choose which date should be checked, the creation date, the publish-date or the modified-date. In the second field you
choose the days. So if we choose creation date and 10 days, the WidgetsBox will only load articles created in the last
10 days and the whole relative, that means tomorrow the articles created 11 days ago will not be displayed and so on.