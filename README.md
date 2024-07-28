# **Frontend Mentor Challenge - Age calculator app**

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q").

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
        - [gsap animation](#gsap-animation)
- [Resources](#resources)

## Overview

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form

- Receive validation errors if:

   - Any field is empty when the form is submitted

   - The day number is not between 1-31

   - The month number is not between 1-12

   - The year is in the future

   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

- See the age numbers animate to their final number when the form is submitted

Links:

- GitHub Repo: <https://github.com/xup60521/react-age-calculator-app>

- Website: <https://xup60521.github.io/react-age-calculator-app/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

- React (powered by vite)

- TailwindCSS

- GSAP

### What I learned

#### gsap animation

At first, I asked ChatGPT to give me an example. But it turned out the animation didn’t play.

After some debugging, I figured out that the ternary might be the cause. Before the user press the button, the digit display should show `- - `. 

```tsx
<span ref={dayRef}>
  {result.day ? result.day : "- - "}
 </span>
```

I quickly realized that since `GSAP` updated the DOM directly using `useRef`, when the result changed, it broke the animation.

As a result, I made some adjustment. Because `GSAP` already updated the DOM, I didn’t need to manually pass the value in the JSX.

```tsx
// fixed
<span ref={dayRef}>
  {"- - "}
 </span>
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google font - <https://fonts.google.com>

- ChatGPT - <https://chatgpt.com/>

- GSAP docs - <https://gsap.com/docs/v3/>