# Interview live coding question
This is the code I wrote for an interview.

The questions is, make a counter which increases and decreases with clicking on the buttons, and if keeping the button for 2 seconds, it will increase / decrease by 5.

It has to keep the same number on the counter, once the window is refreshed.

It also had to look like a mock up that was given in only an image.

# Stack

I used `vite` to create a `React` project with `TypeScript`

# Solution

I used `onClick`, `onMouseUp` and `onMouseDown`. Everytime a mouse button was held down, I would capture the time in millisecond using `Date.now()`, and subtract it by the time I got once mouse button was released.

Also, the time is saved on `localStorage` every time it changed, so it would be persistent, as asked in the question.