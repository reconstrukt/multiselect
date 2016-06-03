JQuery Multiselect 
==================================

Better multiple-select elements, without the drama.

JQuery Multiselect provides an unobtrusive replacement for standard multiple-select form elements in desktop and mobile browsers. Plugin interactions are bound to their corresponding `<select>` elements, so your forms continue to behave as expected without any server-side updates. Simply put, everything just works.

Demo: https://rawgit.com/reconstrukt/multiselect/master/index.html 

Fiddle: https://jsfiddle.net/reconstrukt/cn0dxnz4/


Features
--------

 - Forms behave normally, no server-side shenanigans 
 - Replaced `<select>` elements fire native 'change' events as expected. Default-selected `<option selected>` elements appear as expected. Values submitted from your `<form>` work as usual.
 - Improved UX for native multiple `<select>` elements on iOS 
 - Supports automatic resizing to match width + height of native `<select>`  
 - Supports a 'maximum number of selections' via `maxSelections` config option
 - Tested on Chrome v.50.x, FF v.43.x, Safari OS X Yosemite, Mobile Safari, Mobile Chrome (Android + iOS)

Options
-------

## maxSelections

    maxSelections : 3 

Allows you to enforce a maximum number of selections. Provide an integer value, 1 or greater. Default: `null` (unlimited). 

## autoSize

    autoSize : true
 
Indicates whether to inherit the width and height of the native `<select>` element. Set to `false` to provide your own width/height via custom CSS. Default: `true`. 

## cssClass

    cssClass : 'jquery-multiselect'
 
Specifies the base CSS class for the replacement control. Default: 'jquery-multiselect'. 

## debug

    debug : false

Dumps debugging statements to the console. Default: `false`. 

Usage
-----

Pretty straightforward, just drop in and go.

```javascript
<script>
$(document).ready(function () {

  // init plugin
  
  $('select.multiselect').multiselect({
    maxSelections : 3
  });
  
  // you can still capture change events as you'd normally do, like so
  
  $('select.multiselect').on('change', function(){
    console.log( 'selected value(s): ' + $(this).val() )
  });
  $('select.multiselect option').on('change', function(){
    console.log( 'am I selected? ' + ( $(this).prop('selected') ? 'yes' : 'no' ) )
  });
  
});
```

