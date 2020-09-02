# ember-cli-tooled

![Download count all time](https://img.shields.io/npm/dt/ember-cli-tooled.svg)
[![NPM package](https://img.shields.io/npm/v/ember-cli-tooled.svg)](https://www.npmjs.com/package/ember-cli-tooled) [![Build Status](https://travis-ci.org/ynnoj/ember-cli-tooled.svg)](https://travis-ci.org/ynnoj/ember-cli-tooled) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-tooled.svg)](http://emberobserver.com/addons/ember-cli-tooled)

A lightweight CSS tooltip component for your [Ember CLI] app.

Check out the [demo].

## Installation

```shell
ember install ember-cli-tooled
```

## Usage

From within your template.

```hbs
{{#tooltip-message message="Hello world!"}}
  <button {{action "save"}}>Save</button>
{{/tooltip-message
```

```hbs
{{tooltip-message message="Hello world!" position="right"}}
```

## Options

### Message

The string that is displayed within the tooltip. This is the only **required** option.

#### Example

```hbs
{{tooltip-message message="A test tooltip"}}
```

### Position

Set the position of the tooltip.

*Default value is `top`*

#### Values

* `top`
* `right`
* `bottom`
* `left`

#### Example

```hbs
{{tooltip-message message="This tooltip will appear on right" position="right"}}
```

### Size

Set the size of the tooltip.

*Default value is `medium`*

#### Values

* `small`
* `medium`
* `large`

#### Example

```hbs
{{tooltip-message message="This is a small tooltip" size="small"}}
```

### Theme

*Default value is `dark`*

#### Values

* `dark`
* `light`

#### Example

```hbs
{{tooltip-message message="A light tooltip" theme="light"}}
```

### Always visible

Set the tooltip to be permanently visible, as opposed to being triggered on an element hover.

*Default value is `false`*

#### Example

```hbs
{{tooltip-message message="Tooltip is permanently visible" always=true}}
```

### Animate

Have the tooltip animate in on hover.

*Default value is `true`*

#### Example

```hbs
{{tooltip-message message="Tooltip will animate on hover" animate=true}}
```

[Ember CLI]: http://ember-cli.com
[demo]: http://ynnoj.github.io/ember-cli-tooled
