---
sidebar_label: 'Structured Content'
sidebar_position: 2
toc_max_heading_level: 3
---

# Structured Content

## Introduction

The web is a loose linking of web pages with information, structured content allows search engines to better identify
and assign the content of a page. A Joomla! website does not normally generate structured content for your pages /
articles. Structured content is not magic but just a (structured) collection of information of your page(s) in a
predefined form. These are then displayed in the header of your website within a script tag where search engines can
read them and process them together with the visible content of your page.

The WidgetsBox as a module that displays a collection of article elements is a predestined platform for generating
structured content. With structured content it is possible that search engines can display your content as rich content.
However, it is not a guarantee. The good thing about our WidgetsBox is that you don't need to be a specialist when it
comes to structured content. All you have to do is tell the module where to find the information you need.

### Your Job

Don't get me wrong, for the webmaster (presumably you) it is still an effort. Because you are responsible that the
corresponding information is also available in the correct form (but you can find the necessary information in this
document and others on the subject). Depending on the type of structured content you have to invest more or less work to
generate your content as structured content. If invalid or wrong information is defined for fields it is very likely
that the structured content will be ignored or in the worst case it can have a negative impact on the SEO rating of your
website. I have tried as much as possible to include checks so that structured content is generated only when all the
necessary information is given in the correct form. Nevertheless, after activating and configuring the module, I
recommend every user to make a check with the official checker of
Google([https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)) to
check if the structured content is generated and if it is ok.

### Structured content needs.... Structured content

Confused? Rightly so! But what I want to say is actually quite simple. The WidgetsBox creates and publishes for you the
JSON LD schema for structured content that search engines like. But for the WidgetsBox to do that, the information in
your articles must be structured as well. This is where custom fields come in handy. There are different rich content
types. For some like FAQ's it is not necessary to work with customfields - the module simply loads the information from
title (Question) & text (Answer). But other types like Events or Products need much more information and require that
your articles are populated with the appropriate data (custom fields) that contains the relevant information.Which
fields and which formats are necessary is listed in the instructions of the respective type. In the module settings you
only have to choose which customfield contains which information.

When it comes to implementing structured data in the WidgetsBox we work with so called Customfields. Customfields allow
you to extend your articles with additional content. For example, you can create an additional field that contains the
ISBN value or the SKU of the product. Basically it is a "green field". In order to have the WidgetsBox generate the
extended types of structured content like Product or SoftwareApplication you need to be familiar with CustomFields in
Joomla! On the web there are numerous videos & tutorials for beginners and advanced users in different languages. An
introduction to Customfields can be found in the official manual
here: [Joomla 3 Customfields](https://docs.joomla.org/J3.x:Adding_custom_fields).

## Custom Field Types

Basically, in combination with Structured Content you should only need three different types of custom fields, Text,
List, Radio. Depending on the situation, it is a good idea to use predefined lists so that you only have to "select"
when generating the content.

Let's take our rich content type "Software Applications" as an example. This requires that we have defined fields in our
Joomla! article that contain information about the application category and the operating system.

We could now go and create two custom fields of the type "Text", there we enter each time when creating a new article or
a new software application manually from which type the application is and for which operating systems this is
available. That is correct and can be done - but luxurious is different.

<img src="/img/tutorials/widgetsbox/bad_practice_textfields.jpeg" alt="Custom Fields" className="bordered" />
<p class="meta text-center">Bad Practice: Text Fields</p>
<br/>

It would be much cooler if the two fields were a select list and a radio selection? So you can save the tedious typing
and careless mistakes.

<img src="/img/tutorials/widgetsbox/better_practice_dedicated_types.jpeg" alt="Custom Fields" className="bordered" />
<p class="meta text-center">Much Better: Radio Fields & Checkboxes</p>
<br/>

One last word regarding the use of radio or list field types. Depending on the application scenario, WidgetsBox uses the
rawvalue or value field. The following table shows where which type is used and why. The rawvalue corresponds to the "
field value" whereas the value normally contains the information "frontend conform". Our radio element "Joomla Systems"
shown above displays the following rawvalue when both options are selected:

```json
array(0 => "j3", 1 => "j4")
```

This is because when creating the field the options were defined so that Joomla 3.x & Joomla 4.x are the labels for the
option and j3 and j4 are the values. If you have ever worked with forms you know of course what I'm talking about (Label
vs. Value).

However, the value of this checkbox group contains: "Joomla 3.x, Joomla 4.x" which is of course much more suitable for
the creation of structured content in our case. And this is the reason why we use, depending on the scenario in the
WidgetsBox the rawvalue or the value. The following table provides information about this.

### Fields & Types Overview

| Field                                                                          | Used Value | Why                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|--------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Currency                                                                       | rawvalue   | Should be of type text - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Systems                                                                        | value      | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a multiselect / radio / checkbox field) we get a comma-separated list with the selected options.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ApplicationCategory                                                            | value      | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a multiselect / radio / checkbox field) we get a comma-separated list with the selected options.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Rating Value                                                                   | rawvalue   | Should be of type text or integer - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Rating Counter                                                                 | rawvalue   | Should be of type text or integer - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SKU                                                                            | rawvalue   | Should be of type text or integer - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| MPN                                                                            | rawvalue   | Should be of type text or integer - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Price                                                                          | rawvalue   | Should be of type text or integer - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ValidUntil                                                                     | rawvalue   | Should be of type date or text - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| StartDate                                                                      | rawvalue   | Should be of type date or text - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| EndDate                                                                        | rawvalue   | Should be of type date or text - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Stock Information                                                              | rawvalue   | Should be of type date or text - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| EndDate                                                                        | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (item is in Stock or not). The module only takes the first selected option. You can build a Select Customfield upon this Schema: https://schema.org/ItemAvailability Allowed values are the whole schema link (https://schema.org/InStock) or only the Attribute (inStock).                                                                                                                                                      |
| Organizer Type                                                                 | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (organizer is of type 'Person' or 'Organization'). The module only takes the first selected option. You can build a Select Customfield where the values are 'Person' and 'Organization' to have a selection. Allowed values are 'Person' or 'Organization'.                                                                                                                                                                      |
| Event Status                                                                   | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (organizer is of type 'Person' or 'Organization'). The module only takes the first selected option. You can build a Select Customfield where the values are 'Person' and 'Organization' to have a selection. Allowed values are 'Person' or 'Organization'.                                                                                                                                                                      |
| Organizer Type                                                                 | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (there can only be one status). The module only takes the first selected option. You can build a Select Customfield where the values are based on this Schema: https://schema.org/EventStatusType to have a selection. Allowed values are based on this Schema: https://schema.org/EventStatusType. Values can be the full schema url like 'https://schema.org/EventScheduled' or only the Attribute 'EventScheduled'            |
| Organizer Type                                                                 | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (there can only be one status). The module only takes the first selected option. You can build a Select Customfield where the values are based on this Schema: https://schema.org/EventStatusType to have a selection. Allowed values are based on this Schema: https://schema.org/EventStatusType. Values can be the full schema url like 'https://schema.org/EventScheduled' or only the Attribute 'EventScheduled'            |
| **Event Location:**<br/>Name<br/>Street<br/>Postal<br/>Town<br/>Region<br/>URL | rawvalue   | Should be of type text / URL - no difference if value or rawvalue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Event Location:**<br/>Country                                                | rawvalue   | If the field type is text, it doesn't matter if we use value or rawvalue, if it is an array (i.e. a select / radio / checkbox field) multiple is not supported so we only have ONE value (there can only be one country for a location). The module only takes the first selected option. You can build a Select Customfield where the values are stored as follows:*<br/>Label: Germany, Value: DE<br/>Label: Switzerland, Value: CH<br/>Label: Italy, Value: IT<br/>Label: USA, Value: US<br/>....*<br/>Google wants the data for Country in the format [ISO 3166-1 Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1). |

## Structured Content Types

<div class="alert alert--info">
  <strong>Info:</strong><br/>The module refers to the Google defined specifications for Types / Schema & Required Information which can be found here: <a target="_blank" href="https://developers.google.com/search/docs/appearance/structured-data/search-gallery">https://developers.google.com/search/docs/appearance/structured-data/search-gallery</a>
</div>
<br/>

### Article Type

The rich content type for articles is described by Google
here: [https://developers.google.com/search/docs/data-types/article](https://developers.google.com/search/docs/data-types/article).
In the module settings you only define the "Rich
Content Article Type", you can choose between the generic article format, blog post and news article. Choose the
appropriate type for your article topics. The module will automatically load the article title and text and generate
your rich content script and paste it into the document header.

As with any other rich content example, it doesn't matter if WidgetsBox itself displays the content on your page as a
slideshow, slider, grid or in the form of another widget.

#### Example generated code by WidgetsBox

<!-- @formatter:off -->
```js
array (
    0 => (object) array(
        '@context' =>; 'https://schema.org',
        '@type' =>; 'Article',
        '@id' =>; 'http://yourDomain.tld/index.php?view=article&id=3:der-herr-der-ringe-die-zwei-turme&catid=8',
        'creator' =>(object) array(
            '@type' =>; 'Person',
            'name' => 'Marco Rensch',
        ),
        'headline' => ' Der Herr der Ringe - Die zwei Türme',
        'articleBody' => 'Der Schauplatz des Herrn der Ringe ist Mittelerde, eine alternative Welt, und erzählt wird von der gefahrvollen Quest einiger Gefährten, die in einem dramatischen Kampf gegen das Böse endet.',
        'image' => array (
                0 => 'http://yourDomain.tld/images/headers/walden-pond.jpg?joomla_image_width=700&joomla_image_height=180',
        ),
        'datePublished' => '2021-07-12T08:13:13+00:00',
        'dateModified' => '2021-07-20T13:49:36+00:00',
    ),
    1 => (object) array(
        '@context' =>; 'https://schema.org',
        '@type' =>; 'Article',
        '@id' =>; 'http://yourDomain.tld/index.php?view=article&id=1:der-herr-der-ringe-die-gefahrten&catid=8',
        'creator' =>(object) array(
            '@type' =>; 'Person',
            'name' => 'Marco Rensch',
        ),
        'headline' => 'Der Herr der Ringe - Die Gefährten',
        'articleBody' => 'Der Schauplatz des Herrn der Ringe ist Mittelerde, eine alternative Welt, und erzählt wird von der gefahrvollen Quest einiger Gefährten, die in einem dramatischen Kampf gegen das Böse endet.',
        'image' => array (
            0 => 'http://yourDomain.tld/images/headers/walden-pond.jpg?joomla_image_width=700&joomla_image_height=180',
        ),
        'datePublished' => '2021-07-12T08:13:13+00:00',
        'dateModified' => '2021-07-20T13:49:01+00:00',
    ),
    2 => (object) array(
        '@context' =>; 'https://schema.org',
        '@type' =>; 'Article',
        '@id' =>; 'http://yourDomain.tld/index.php?view=article&id=2:der-herr-der-ringe-die-ruckkehr-des-konigs&catid=8',
        'creator' => (object) array(
            '@type' =>; 'Person',
            'name' => 'Marco Rensch',
        ),
        'headline' => 'Der Herr der Ringe - Die Rückkehr des Königs',
        'articleBody' => 'Der Schauplatz des Herrn der Ringe ist Mittelerde, eine alternative Welt, und erzählt wird von der gefahrvollen Quest einiger Gefährten, die in einem dramatischen Kampf gegen das Böse endet.',
        'image' => array (
            0 => 'http://yourDomain.tld/images/headers/walden-pond.jpg?joomla_image_width=700&joomla_image_height=180',
        ),
        'datePublished' => '2021-07-12T08:13:13+00:00',
        'dateModified' => '2021-07-20T13:49:25+00:00',
    ),
    ...
)
```
<!-- @formatter:on -->

### FAQ Type

Often you see these Accordions for single search hits on search engines, in the background someone worked here with
structured content and the @type "FaqPage" - You can find more about this in this Google Developer
article: [https://developers.google.com/search/docs/data-types/faqpage](https://developers.google.com/search/docs/data-types/faqpage).
WidgetsBox can help you to generate this function for your FAQ module as well. Open the module settings of your
WidgetsBox module instance and navigate to the tab "Structured Content". Here you activate the support for Structured
Content and select FAQ as type.

<img src="/img/tutorials/widgetsbox/struct_content_faq.jpeg" alt="Module Settings Structured Content FAQ" className="bordered" />
<p class="meta text-center">Module Settings Structured Content FAQ</p>
<br/>

The widget box now creates a rich content entry in the header of this page for each article that is displayed within the
module. This is read by search engines and processed accordingly. The FAQ type automatically uses the title of your
article as a question and the text area as an answer. It does not matter what kind of widget you use. Therefore, a note:
Google clearly defines that the structured content as such should also be found on the website. It can be assumed that
if you use a grid, for example, you should also display the text content to "satisfy Google" - this is not an explicit
statement, but a logical conclusion.

#### Example generated code by WidgetsBox

<!-- @formatter:off -->
```js
(object) array(
    '@context' =>; 'https://schema.org',
    '@type' =>; 'FAQPage',
    'name' => 'Frequently Asked Questions',
    'creator' => (object) array(
        '@type' =>; 'Person',
        'name' => 'Marco Rensch',
    ),
    'mainEntity' => array (
        0 =>(object) array(
            '@type' =>; 'Question',
            'name' => 'Where is the Lord of the Rings set?',
            'acceptedAnswer' => (object) array(
                '@type' =>; 'Answer',
                'text' => 'The setting of The Lord of the Rings is Middle Earth, an alternate world.',
            ),
        ),
        1 => (object) array(
            '@type' =>; 'Question',
            'name' => 'What does 42 mean in the meaning of life?',
            'acceptedAnswer' => (object) array(
                '@type' =>; 'Answer',
                'text' => 'In The Hitchhiker's Guide to the Galaxy, advanced alien beings create a supercomputer, called Deep Thought, to figure out the answer to the so-called Ultimate Question of Life, the Universe, and Everything. After calculating for 7.5-million years, Deep Thought determined the answer was the number 42.',
            ),
        ),
        2 => (object) array(
            '@type' =>; 'Question',
            'name' => 'How many cantons does switzerland have?',
            'acceptedAnswer' => (object) array(
                '@type' =>; 'Answer',
                'text' => 'Switzerland has 26 cantons. Six of them are known as half cantons.',
            ),
        ),
        ...
    )
)
```
<!--@formatter:on-->

### Product Type

Structured content of the type "Product" is one of the most complex types for the generation and maintenance of the
data. With this type we now also deal for the first time with how to use additional fields to define further content for
our structured content. Remember from the introduction? "Structured content needs structured content" - yes, that's what
we're dealing with now. So, fresh cup of coffee and let's go!

#### Required Fields

There is a whole set of "required fields" most of which you can skip if you want, but be warned: if you omit the wrong /
too much information, all the work is for naught and search engines will ignore your structured content simply because
it is "irrelevant". Of course, it would be optimal if you fill every field with information, but this may not always be
possible. Let's look at the fields in detail:

| Module Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required                  |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| Image            | Image to be used for the structured content. Various types support the use of images such as products or books. options are: Intro Image or Fulltext Image                                                                                                                                                                                                                                                                                                                                                                    | strongly recommendet      |
| Price            | Select the custom field that contains the price information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | yes                       |
| Currency         | If the elements use different currencies, the field where the corresponding currency is stored can be selected here. This is only needed if no general currency is used for all elements. Then please enter the currency in the field below.                                                                                                                                                                                                                                                                                  | yes, but read description |
| Price Currency   | Specify the currency for the prices of your elements - for example USD for US Dollar. This is a Fallback value when the CF is not set or empty.                                                                                                                                                                                                                                                                                                                                                                               | yes                       |
| Brand ``CF`` | Select the custom field that contains the brand information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no                        |
| SKU ``CF``         | A stock-keeping unit (SKU) is a scannable bar code, most often seen printed on product labels in a retail store.                                                                                                                                                                                                                                                                                                                                                                                                              | no                        |
| MPN ``CF``        | A manufacturer's part number (MPN) is a unique identifier assigned by a manufacturer to a product.                                                                                                                                                                                                                                                                                                                                                                                                                            | strongly recommendet      |
| Valid until ``CF`` | The date after which the offer is no longer available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | recommendet               |
| Stock Information ``CF`` | The customfield that holds the information (schema link) for inStock type. Allowed values are: ``https://schema.org/InStock``, ``https://schema.org/OutOfStock``, or others as seen here: https://schema.org/ItemAvailability. <br/>If no field is selected the module will use the inStock Schema. If you are using this module with digital products you can ignore this field. We will take care of it and when there is no information available we set always inStock because we assume that you distribute digital products. | yes                       |

#### Optional Fields

| Module Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                            | Required                  |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| Rating Engine | Choose where the rating data should come from. If Joomla Integrated is selected, the vote plugin must be activated. Also make sure that there are options for voting in the frontend. More information can be found [here](https://nx-designs.ch/blog/67-general/209-joomla-integrated-voting). If you work with customfields please select the appropriate fields for the rating value and the number of votes below. | no                        |
| Rating Value ``CF`` | Select the custom field that contains the rating value.                                                                                                                                                                                                                                                                                                                                                                 | no                        |
| Max Rating Value | Required for calculations. Most systems works with a 5-star based system. But when your system has more or less then five rating levels note the correct value here.                                                                                                                                                                                                                                                                                                                                                        | no                        |
| Rating Counter ``CF`` | Select the custom field that contains the rating counter.                                                                                                                                                                                                                                                                                                                                                              | no                        |

``CF`` = Custom Field

### Event Type

Structured content of the type "Event" is the most complex type for the generation and maintenance of the data. With
this type we use additional fields to define detailled data for our structured content. Remember from the
introduction? "Structured content needs structured content" - yes, that's what we're dealing with now. So, another fresh
cup of coffee and let's go!

#### Required Fields

There is a whole set of "required fields" most of which you can skip if you want, but be warned: if you omit the wrong /
too much information, all the work is for naught and search engines will ignore your structured content simply because
it is "irrelevant". Of course, it would be optimal if you fill every field with information, but this may not always be
possible. Let's look at the fields in detail.

| Module Parameter                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required                                                                                    |
|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Image                                                                                                                         | Image to be used for the structured content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | strongly recommendet                                                                        |
| Start Date ``CF``<br/>End Date ``CF``                                                                                         | Select the custom field that contains the start date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | yes                                                                                         |
| Event Offer Valid from                                                                                                        | Article field that holds the information from when on the offer / price is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | recommendet                                                                                 |
| Ticket URL ``CF``                                                                                                             | Customfield that holds the URL for Ticketing. Full URL is required here no relative URL's.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no                                                                                          |
| Performer x Type ``CF``                                                                                                       | For each performer you can define the type of performer. A performer type can be a "Person" or a "PerformingGroup". Based on the Schema. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                         | yes                                                                                         |
| Performer x Name ``CF``                                                                                                       | For each performer you can define the name of the performer. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | yes                                                                                         |
| Performer x URL ``CF``                                                                                                        | Customfield that holds the Performer's URL. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no                                                                                          |
| Organizer Type ``CF``                                                                                                         | An Organizer can be an "Organization" or a "Person" - This field contains the type declaration. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                  | no, will be set automaticaly to 'Organization' if no data is given                          |
| Organizer Name ``CF``                                                                                                         | The name of the organizer. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | yes                                                                                         |
| Organizer URL ``CF``                                                                                                          | The URL of the organizer. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no                                                                                          |
| Eventstatus ``CF``                                                                                                            | The current event status as a scheme URL. Allowed values according to: ``https://schema.org/EventStatusType``. The field value must contain the complete URL or the scheme value, i.e.: ``https://schema.org/EventScheduled`` or ``EventScheduled``, or others as seen here: https://schema.org/EventStatus.                                                                                                                                                                                                                                                         | no, will be set automaticaly to ``EventScheduled`` if no data is given                      |
| Event Location Type ``CF``                                                                                                    | Customfield that holds the location type. Supported Location Types are ``Place`` or ``VirtualLocation``. If this field is empty or not set Location Type ``Place`` and all its necessary fields for address will be used.                                                                                                                                                                                                                                                                                                                                            | yes                                                                                         |
| Event Location Name ``CF``<br/>Event Location Street ``CF``<br/>Event Location ZIP ``CF``<br/>Event Location Town ``CF``<br/> | Customfield that holds the location street address as string value. **Only needed for events of type 'Place'.**                                                                                                                                                                                                                                                                                                                                                                                                                                                      | yes if Location Type is ``Place``                                                           |
| Event Location Region ``CF``| Customfield that holds the location region code as string value. **Only needed for events of type ``Place``.** States in the USA e.g. 'NY' or 'WS', federal states in Germany like 'NW', 'SH' etc. Field gets omitted when not set or empty.                                                                                                                                                                                                                                                                                                                         | no                                                                                          |
| Event Location Country ``CF``                                                                                                 | Customfield that holds the location country in [ISO 3166-1 Alpha-2 Format](https://en.wikipedia.org/wiki/ISO_3166-1): 'US' for United States of America, 'CH' for Switzerland, 'DE' for Germany...                                                                                                                                                                                                                                                                                                                                                                   | yes if Location Type is ``Place``                                                           |
| Event Location URL ``CF``                                                                                                     | Customfield that holds the location URL. The Module takes the value (rawvalue) of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | yes if Location Type is ``VirtualLocation``                                                 |
| Price ``CF``                                                                                                                  | Customfield that holds the price.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | yes                                                                                         |
| Currency ``CF``                                                                                                               | Customfield that holds the currency. If the elements use different currencies, the field where the corresponding currency is stored can be selected here. This is only needed if no general currency is used for all elements. Then please enter the currency in the field below.                                                                                                                                                                                                                                                                                    | yes but see below                                                                           |
| Price Currency                                                                                                                | If all elements use the same currency, it can be entered here. Specify the currency for the prices of your elements - for example USD for US Dollar. **This Field is also used as Fallback Value if the Currency Custom Field is not set or empty**                                                                                                                                                                                                                                                                                                                  | no, but if you use different currencies for each element, you must enter the currency here. |
| Stock Information ``CF``                                                                                                      | The customfield that holds the information (schema link) for inStock type. Allowed values are: ``https://schema.org/InStock``, ``https://schema.org/OutOfStock``, or others as seen here: [https://schema.org/ItemAvailability](https://schema.org/ItemAvailability). If no field is selected the module will use the ``inStock` Schema. If you are using this module with digital products you can ignore this field. We will take care of it and when there is no information available we set always inStock because we assume that you distribute digital products. | yes but see description                                                                     |

``CF`` = Custom Field

### Software Application Type

Structured content of the type "Software Application" is a complex type for the generation and maintenance of the data.
With this type we have to deal with additional fields to define further data for our structured content. Remember from
the introduction? "Structured content needs structured content" - yes, that's what we're dealing with now. So, another
fresh cup of coffee and let's go!

#### Required Fields

There is a whole set of "required fields" most of which you can skip if you want, but be warned: if you omit the wrong /
too much information, all the work is for naught and search engines will ignore your structured content simply because
it is "irrelevant". Of course, it would be optimal if you fill every field with information, but this may not always be
possible. Let's look at the fields in detail:

| Module Parameter                  | Description                                                                                                                                                                                                                                                                       | Required            |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Price ``CF``                      | Customfield that holds the price.                                                                                                                                                                                                                                                 | yes                 |
| Currency ``CF``                   | Customfield that holds the currency. If the elements use different currencies, the field where the corresponding currency is stored can be selected here. This is only needed if no general currency is used for all elements. Then please enter the currency in the field below. | yes but see below   |
| Price Currency                    | If all elements use the same currency, it can be entered here. Specify the currency for the prices of your elements - for example USD for US Dollar. **This Field is also used as Fallback Value if the Currency Custom Field is not set or empty**                               | no, but if you use different currencies for each element, you must enter the currency here. |
| Application Category ``CF``       | The customfield that holds the information (text node) for Application Category field. Allowed values are listed [here](https://developers.google.com/search/docs/data-types/software-app).If no field is selected or no value is given the module will skip generation of structured data for the related article. If Debug Mode is turned on and you are logged in as SuperAdmin in the Frontend you will find more information in your Browser Console. | yes                 |
| Operating System ``CF``           | The customfield that holds the information (text node) for supported Operating Systems. This is a free text node and has no required Schema. Best practice is to use a customfield of type 'Select' or 'Radio'. The module supports multiselect values that will be combined into a comma separated string.  | no, but recommendet                 |

``CF`` = Custom Field

For the Software Applications Type, the following additional rating options exist:

| Module Parameter      | Description                                                                                                                                                                                                                                                                       | Required |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Rating Engine         | Choose where the rating data should come from. If Joomla Integrated is selected, the vote plugin must be activated. Also make sure that there are options for voting in the frontend. More information can be found [here](https://nx-designs.ch/blog/67-general/209-joomla-integrated-voting). If you work with customfields please select the appropriate fields for the rating value and the number of votes below. |          |
| Rating Value ``CF``   | Only available when Rating Engine "Customfields" is selected: Customfield that holds the item rating value as string or integer. | no       |
| Max Rating Value      | Required for calculations. Most systems works with a 5-star based system. But when your system has more or less then five rating levels note the correct value here. | no |
| Rating Counter ``CF`` | Customfield that holds the item rating counter as string or integer. | no       |

``CF`` = Custom Field





