# Text Splitting Script

## Description

This JavaScript script is designed to split text elements based on certain attributes. It works by iterating through each element and applying transformations based on the `cb-textreveal-type` attribute. The script also integrates with Weglot for language translation.

## Requirements

- jQuery
- Weglot (optional for language translation)

## Installation

1. Include jQuery in your project.
2. Optionally, include Weglot for language translation support.
3. Add the `textSplit.js` script to your project.

## Usage

### HTML

Add the `cb-textreveal-element` and `cb-textreveal-type` attributes to the elements you want to split.

```html
<div cb-textreveal-element="text" cb-textreveal-type="word">Your text here</div>
```

### JavaScript

Call the `textSplit` function on the elements you want to split.

```javascript
textSplit($("[cb-textreveal-element=text]"));
```

### Attributes

- `cb-textreveal-type`: Specifies the type of split. Options are "character", "word", and "full".

## Events

The script listens to the following Weglot events:

- `languageChanged`: Triggered when the language is changed.
- `initialized`: Triggered when Weglot is initialized.

## License

MIT
