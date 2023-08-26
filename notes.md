### CSS Selector
1. Element Selector
2. Class Selector
3. Id Selector
4. Descendant Selector
5. Child Selector
6. Attribute Selector
7. Psudo-Selector

### CSS Positions
1. Static(default)
2. relative - relative to its original position
3. Absoulute - relative to its nearest ancestor(other than static),if not then taken out of normal doc flow
4. Fixed - relative to viewport, fixed at one position even if we scroll
5. Sticky - mix of fixed and relative, moves as we scroll but when page ends it got fixed.

### CSS Box Model
Fundamental CSS concept that describe how element is represented within rectangular box.
1. Content - innermost part of box model,it contains element like text,images.
2. Padding - surrounding transperent area of content.
3. Border - line that surround padding & content
4. Margin - transperent area that surrounds border.it create space between adjencent element.

### Selector Specificity
Mechanisam used by browser to calculate which CSS style would apply,if multiple rules targeting same element.
1. Inline styles - 1000
2. ID Selector - 100
3. Class Selector,Attribute Selector,Psudo-class selector - 10
4. Element Selector - 1

### Media queries - min-width & max-width
1. Min-Width - it checkes if screen size is equal/greater than specified value.
2. Max-Width - it checks if screen size is less/equal to specified value.


### JAVASCRIPT CONCEPTS

### Differance between var,let & const.


### What is Hoisting in JavaScript?
Hoisting in javascript is concept where variables & functions are declared/hoisted to the top of thier 
respective scope. that means we can use var,fun can be accessed/used before thier formally declaration in code.
but its important to understand that it it just declaration and not initialization/assignment.

1. Varialble Hoisting - variable declared with var are hoisted to top of thier scope.
2. Function Hoisting - also declared at the top of thier scope.

unlike var, let & const al are also declared at the top of thier scope but initialised. 
if you try to access them before actual declaration you will get referance error.

### What is the difference between var, let, and const variables?

1. var - function scoped,hoisting done by initialising with undefined,reassignment is possible.
2. let - block scoped,hoisting done but not initialised with undefined,reassignment is possible.
3. const - block scoped,hoisting done but not initialised with undefined,reassignment is not possible.

### What is type coercion in javascript?
type coercion is concept in which javascript tries to convert value from one data type to another
 
1. Explicit - Number("1") = 1
2. Implicit - 5+"1" = "51"

### What are the different higher-order functions in JS?
Function which takes another function as argument,called as HOF.
1. map - takes callback as argument (element,index,arr), return new array
2. filter - takes callback as argument(element,index,arr), return new array
3. reduce - it takes callback as argument (accumlator,currValue,currIndex,arr) & initialVal
4. forEach -takes callback as argument(element,index,arr),doesnt return new array

