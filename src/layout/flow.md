# How are elements laid out by default? #

individual element boxes are laid out by taking the elements' content, then adding any padding, border and margin around them-- this is from the box model.

By default a block level element's content is 100 % of the width of its parent element, and as tall as its content. inline elements are all tall as their content, and as wide as their content.

* You can't set width or height on inline elements -- they just sit inside the content of block level elements.

# How do elements interact with one another? # 
By default, block-level elements are laid out in the direction that blocks display in the writing mode of the document -- each one will appear on a new line below the last one, and they will be separated by any margin that is set on them. Block-level elements are laid out vertically.

