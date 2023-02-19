# Dynamic Filter

The Dynamic Filter in Exposer allows you to display items & contacts based on Customfield values.  
The newly introduced conditions give you additional possibilities to compare Customfield values.

<img src="/img/exposer/dynamic_filter_options.jpg" alt="Dynamic Filter Options" className="bordered" />

## Conditions

| Condition              | Description                                                                                                                                                                                                                                                                  |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `disabled`             | The Dynamic Filter is disabled                                                                                                                                                                                                                                               |
| `is empty`             | Shows items where the selected field (Customfield Article / Contact) is empty                                                                                                                                                                                                |
| `is not empty`         | Shows items where the selected field (Customfield Article / Contact) is not empty                                                                                                                                                                                            |
| `is equal to`          | Shows items where the selected field (Customfield Article / Contact) is equal to the value of the **Container Key** Field value or the defined value in the **Fixed Value** field.                                                                                           |
| `is not equal to`      | Shows items where the selected field (Customfield Article / Contact) is not equal to the value of the **Container Key** Field value or the defined value in the **Fixed Value** field.                                                                                       |
| `is less than`         | Shows items where the selected field (Customfield Article / Contact) is less than the value of the Container Key Field value or the defined value in the Fixed Value field.  _When used this field with "non-integer" fields normaly the numeric value is set to 0_          |
| `is same or less than` | Shows items where the selected field (Customfield Article / Contact) is same or less than the value of the Container Key Field value or the defined value in the Fixed Value field.  When used this field with "non-integer" fields normaly the numeric value is set to 0    |
| `is greater than`      | Shows items where the selected field (Customfield Article / Contact) is greater than the value of the Container Key Field value or the defined value in the Fixed Value field.  When used this field with "non-integer" fields normaly the numeric value is set to 0         |
| `is same or greater`   | Shows items where the selected field (Customfield Article / Contact) is same or greater than the value of the Container Key Field value or the defined value in the Fixed Value field.  When used this field with "non-integer" fields normaly the numeric value is set to 0 |
| `contains`             | Shows items where the selected field (Customfield Article / Contact) does contains the value of the Container Key Field value or the defined value in the Fixed Value field.                                                                                                 |
| `does not contain`     | Shows items where the selected field (Customfield Article / Contact) does not contain the value of the Container Key Field value or the defined value in the Fixed Value field.                                                                                              |

## Container Key Field
The Container Key field can be selected when you are not using the Conditions is empty or is not empty. This field defines where the key value will be found.

## Customfield (Target Field)
The Customfield (Target Field) defines the Customfield which will be used for the condition.

## Customfield Target
By default, a Customfield will be saved with a value and a raw value in Joomla! This option allows you use your conditions with the customfields value or raw value field.

## Cleanup ID
In some cases it might be needed to cleanup the ID (Key Field value). Cleanup ID will remove unneeded parts of a possible id and returns only a numeric value.





