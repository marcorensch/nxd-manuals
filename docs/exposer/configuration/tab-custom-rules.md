---
sidebar_label: 'Custom Rules Tab'
sidebar_position: 3
toc_max_heading_level: 2
---

# Custom Rules Tab
Within this section you can create Customfield Rules. You can define if a certain customfield should have a prefix / suffix.
With Customfield you can manipulate the output of the customfield. Rules got applied in the order they are defined. 
For example Rule #2 will be applied after the changes of rule #1. It is possible to define multiple rules for the 
same customfield.

## General Options
### Field Contents to be skipped
Here you can define the contents of the customfield that should be skipped. Multiple contents can be entered
separated by Comma. The Field contains a Comma separated list of values that should be excluded from rendering. 
If an entry in this list is detected as a value within a Customfield, the corresponding field got ignored.  
Example values: ``1, ,forbiddenstring``

### Skip empty fields
If this option is activated, empty fields will be skipped. If set to no, empty fields will be rendered as empty row.

## Rules
You can add Rules by clicking on the plus button. We will explain the options in the following sections. 
You can switch the order of the rules by dragging the rule up or down.

<img src="/img/exposer/custom-rules-intro.png" alt="Custom Field Rule" className="bordered" />

### Customfield Name
Here you can define the name of the customfield that should be manipulated.

### Rule Type: Before
This rule will be applied before the customfield value. You can define a prefix that will be added before the existing value.
Use the Field __String to Add__ to define the prefix.

### Rule Type: After
This rule will be applied after the customfield value. You can define a suffix that will be appended to the existing value.
Use the Field __String to Add__ to define the suffix.

### Rule Type: Date Format
This rule will be applied to the customfield value. You can define a date format that will be applied to the existing value.
Use the Field __Date Format__ to define the date format. The date format is defined by the PHP date function.
See [PHP Date Function](https://www.php.net/manual/en/function.date.php) for more information.  
Example: ``Y-m-d``

### Rule Type: Replace
This rule will be applied to the customfield value. You can define a string that will be replaced by another string.
Use the Field __String to Search__ to define the string (or Regular Expression (PHP)) that should be replaced. 
Use the Field __Replacement__ to  define the replacement string. Alternatively you can use the Field 
__Replacement Type__ to Linebreak to easily add a Linebreak in place.

### Rule Target
Here you can define when the rule should be applied. You can choose between the following options:
- always: The rule will be applied always
- Cards: The rule will be applied only if the current view is a card view
- List: The rule will be applied only if the current view is a list view
- Modal: The rule will be applied for Customfields in the Modal
- Modal Customfields 1: The rule will be applied only in the Customfields 1 area of the modal
- Modal Customfields 2: The rule will be applied only in the Customfields 2 area of the modal
