---
sidebar_label: 'Custom Rules'
sidebar_position: 6
toc_max_heading_level: 2
---

# Custom Rules

<p class="lead">
Oriel Pro includes a powerful Custom Rule system that allows you to manipulate the album and filter labels.
</p>

<img src="/img/oriel/custom_rules_overview.png" alt="Oriel Pro Custom Rules" className="bordered" />

## What are Custom Rules?

Custom rules can be used to adjust Gallery and/or image labels.
The original file & folder names are not manipulated by this.
The options allow frontend improved labels to be displayed. You can define several custom rules, these are applied one
after the other and build on the output value on the previous rule.

## Not translate Option

The first option in this view is called **Not translate** this comma separated list contains Strings that should not be
translated. It can hold a comma separated list of foldernames: `cassiopaia,my folder a,another folder, ... `

## Rule Options

By using the Plus Button you can add a new rule. The following options are available for each rule:

### For

Select here the target for this rule, available options are:

- **Image & Album Titles:** This rule will be applied to both image and album titles
- **Image Titles:** This rule will be applied to image titles only
- **Album Titles:** This rule will be applied to album titles only

### Rule Type

Select here the type of rule / what the rule should do, available options are:

- **Append before:** This rule will append the given string before the original title
- **Attach after:** This rule will append the given string after the original title
- **Replace:** This rule will replace the search String (Find Field) from the original title with the given string
- **Remove All Integers:** This rule will remove all integers from the original title
- **Remove Leading Numbers:** This rule will remove all leading integers from the original title
- **Remove Trailing Numbers:** This rule will remove all trailing integers from the original title

### Find

This field is only available for the **Replace** rule type. Here you can define the string that should be replaced. This
field supports Regular Expressions in PHP Format. Insert your expression including delimiter. For
example: `/^(\d{2})-(\d{2})-(\d{4})$/` will match the date format `dd-mm-yyyy`. Enable the **Is Regular Expression**
option to use this feature.

### Replace with

Select here the replacement type for the string (above). Available options are:
-**String:** This rule will remove the search string from the original title
-**None breakable Space:** This rule will replace the search string with a none breakable space
-**Space:** This rule will replace the search string with a white-space
-**Linebreak:** This rule will replace the search string with a linebreak

### Use

This field is only available for the **Replace** rule type where `String` is used as **Replace with** Option. Here you
can define the replacement string.

### Is Regular Expression

When enabling this option your search pattern got handled as regular expression.

## Examples

| Original Title           | Rule Type              | Find                          | Is Regular Expression | Replace with          | Use   | Result                        |
|--------------------------|------------------------|-------------------------------|-----------------------|-----------------------|-------|-------------------------------|
| `01-01-2020-AlbumIntro`  | Replace                | `/^(\d{2})-(\d{2})-(\d{4})-/` | yes                   | `String`              | ""    | AlbumIntro                    |
| `01-03-2021-AlbumOne`    | Replace                | `/^(\d{2})-(\d{2})-(\d{4})-/` | yes                   | `String`              | ""    | AlbumOne                      |
| `01AlbumTitle`           | Remove Leading Numbers |                               |                       |                       |       | AlbumTitle                    |
| `Album_Title__Yearly`    | Replace                | `__`                          | no                    | `Linebreak`           |       | Album_Title<br/>Yearly        |
| `Album_Title<br/>Yearly` | Replace                | `_`                           | no                    | `Non Breakable Space` |       | `Album&nbsp;Title<br/>Yearly` |
| `Foo_Gallery`            | Replace                | `Foo`                         | no                    | `String`              | `Bar` | Bar_Gallery                   |
