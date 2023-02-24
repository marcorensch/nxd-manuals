---
sidebar_label: 'Sort by Customfield'
sidebar_position: 4
toc_max_heading_level: 2
---

# Sort by Customfield

Exposer can sort your articles by customfield value, but of course you have to create and fill them with
information first. It doesn't matter if they are date fields, integer or text… btw: you should not try to sort by a
customfield of type image, how useless that would be is self-evident...

## Quickinfo Customfield creation

You can define custom fields in the Joomla! backend via **Content** --> **Fields**. It is important that you remember
the name of the field. We will need this later in Exposer. In our planetarium demo list we have sorted the entries by 
the field *distance to sun*. The name of the field is ``distance``:

<img src="/img/exposer/exposer_demo_planetarium_distance.jpg" alt="Sort by Customfield Quickinfo" className="bordered" />

And this is what the parameters for sorting in Exposer look like:

<img src="/img/exposer/exposer_distance_module_sortby.jpg" alt="Sort by Customfield Quickinfo" className="bordered" />

> **Please Note:** The custom field that is used for sorting does not necessarily have to be used in the template.