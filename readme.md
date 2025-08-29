### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: **getElementById("id") -- single elements by ID.

**getElementsByClassName("class") -- Multiple elements by class(live).

**querySelector("selector") -- frist match (CSS selector).

**querySelectorAll("selector") -- all matches (static list).



2. How do you **create and insert a new element into the DOM**?

Ans: Use

3. What is **Event Bubbling** and how does it work?

Ans: Event Bubbling means when an event happens on a child element,it first runs its own handler and then "bubbles up" to its parent, then grandparent, until the root.
# in short: Events travels from the innermost element --outward (child -> parent -> document).


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: One parent listener handles child events (via bubbling).
# Useful: Saves memory + works for dynamic elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: **preventDefault() --> stops the default browser action (e.g., link navigation, from submit).

**stopPropagation() --> stops the event from bubbling up to parent elements.