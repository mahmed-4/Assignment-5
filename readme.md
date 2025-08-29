### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
*getElementById("id") -- single elements by ID.

*getElementsByClassName("class") -- Multiple        elements by class(live).
*querySelector("selector") -- frist match (CSS selector).
*querySelectorAll("selector") -- all matches (static list).

2. How do you **create and insert a new element into the DOM**?
Ans: Use document.creatElement() --> set content/attributes --> insert with appendChild() or insertBefore()

3. What is **Event Bubbling** and how does it work?
Ans: Event Bubbling = Event goes child --> parent --> document.
* triggered on child first, then bubbles up through ancestors.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: One parent listener handles child events (via bubbling).
# Useful: Saves memory + works for dynamic elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: **preventDefault() --> stops browser's default action.
**stopPropagation() --> stops event from bubbling to parent elements.