# How are elements laid out by default? #

individual element boxes are laid out by taking the elements' content, then adding any padding, border and margin around them-- this is from the box model.

By default a block level element's content is 100% of the width of its parent element, and as tall as its content. inline elements are all tall as their content, and as wide as their content.

* You can't set width or height on inline elements -- they just sit inside the content of block level elements.

# How do elements interact with one another? # 
By default, block-level elements are laid out in the direction that blocks display in the writing mode of the document -- each one will appear on a new line below the last one, and they will be separated by any margin that is set on them. Block-level elements are laid out vertically.

if two adjacent elements both have the margin set on them and the two margins touch, the larger of the two remains, and the smaller one disappears -- this is called margin collapsing.

# What is a Block Element?
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

Examples of block-level elements:

* ```<div>```
* ```<h1> - <h6>```
* ```<p>```
* ```<form>```
* ```<header>```
* ```<footer>```
* ```<section>```

# What is an Inline Element?
An inline element does not start on a new line and only takes up as much width as necessary.

Examples of inline elements:
* ```<span>```
* ```<a>```
* ```<img>```

# Using width, max-width and margin: auto;

Setting the **width** of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. the element will take up the specified width, and the remaining space will be split equally between the two margins:

[See image](../images/div_img.png)

**Note:** The problem with the ```<div>``` above occurs when the browser window is smaller than the width of the element. The browser then adds a horizonta scrollbar to the page.

Using ```max-width``` instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices.

# CSS Layout -  The position Property

The ```position``` property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky)

There are five different position values:
* static
* relative
* fixed 
* absolute
* sticky

Elements are then positioned using the top, bottom, left, and right properties. However, these properties. However, these properties will not work unless the ```position``` property is set first. 

###### Position: static

HTML elements are positioned static by default.

Static positioned elements are not affected by the ```top```, ```bottom```, ```left```, and ```right``` properties. 

###### position: relative
An element with ```position:relative;``` is positioned relative to its normal position.

Setting the ```top```, ```bottom```, ```left```, and ```right``` properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

###### position: fixed

An element with ```position: fixed``` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The ```top```, ```right```, ```bottom```, and ```left``` properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

###### position: absolute
An element with ```position: abslute;``` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

**Note:** A "positioned" element is one whose position is anything except ```static```.

###### position: sticky

An element with ```position: sticky;``` is positioned based on the user's scroll position.

A sticky element toggles between ```relative``` and ```fixed```, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

###### Overlapping Elements
When elements are positioned, they can overlap other elements.

The ```z-index``` property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element can have a positive or negative stack order.

**Note:**  if two position elements overlap without a ```z-index``` specified, the element positioned last in the HTML code will be shown on top. 