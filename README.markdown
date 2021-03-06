# Virgule

Virgule (*vir•gule*) is a Javascript plugin that do one thing, set focus on an input field (typically search input) using virgule (/) key.

## Install

bower:
```Bash
bower i virgule --save
```

npm:
```Bash
npm i virgule --save
```

## How to use

Given the markup

```HTML
<input class="search" type="search">

<script src="virgule.js"></script>
```

Quick initialization

```Javascript
virgule.init('.search');
```

Virgule also accept a dom element so the code above can be written to

```Javascript
var input = document.querySelector('.search');
virgule.init(input);
```

Virgule also work well with browserify

```Javascript
var virgule = require('virgule');
virgure.init('.search');
```

## Options

### keycode
* type: **String**
* default: '191' (virgule keycode)
* Description: which key's keycode used to set focus to the input

### Browser support

* IE9 along with other [evergreen browsers](http://eisenbergeffect.bluespire.com/evergreen-browsers/).