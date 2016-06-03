JQuery Multiselect 
==================================

Drop-in replacement for multiple-select elements.

JQuery multiselect provides a facade for manipulating standard multiple-select form elements in desktop, tablet and mobile browsers.  Interactions are bound to corresponding <select> elements, so forms continue to behave as expected without requiring server-side updates.  

Check the fiddle here: http://jsfiddle.net/reconstrukt/

Features
--------

 - Forms continue to behave normally, no server-side shenanigans 
 - Automatically resizes to match width + height of native <select>  
 - Better UX than native multiple <select> elements on iOS iPad/iPhone  
 - Replaced <select> elements continue to fire native 'change' events as expected 
 - Optionally supports a 'maximum number of selections' via config 
 
Options
-------

## maxSelections

    maxSelections : 3 

Allows you to enforce a maximum number of selections. Provide an integer value, 1 or greater. Default: `null` (unlimited). 

## autoSize

    autoSize : true
 
Indicates the control should inherit the width and height of the native <select> element. Set to `false` to provide your own width/height via custom CSS. Default: `true`. 

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
    console.log( 'yay! ' )
  });
  $('select.multiselect option').on('change', function(){
    console.log( 'yay! ' + $(this).val() )
  });
  
});
```

