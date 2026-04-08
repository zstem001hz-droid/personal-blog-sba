# Mod 5: SBA Lab - The Document Object Model 

Building an interactive user registration form applying my knowledge of DOM manipulation, event handling, HTML5, JavaScript form validation, and localStorage. The form will provide real-time feedback to the user and demonstrate how to handle user input effectively and persist simple data.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
In this lab, I am developing an "**Interactive Personal Blog Platform** from scratch. This project will test my ability to manipulate the DOM, handle user events, implement form validation, and utilize localStorage for data persistence.

The primary focus is on client-side JavaScript functionality to create a dynamic and interactive web application. While the appearance of the application is important, the focus is on JavaScript functionality.

## Scenerio

Imagine you are building a personal project: a simple, client-side only blog or journal platform. You want to be able to quickly jot down thoughts, save them, view them later, and manage your entries directly in your browser without needing a backend database. The application should be user-friendly and provide a seamless experience for managing your posts.

## My process

Began by creating my project's folder structure, and creating the script.js, and style.css, and index.html files inside the project folder's directories. Formatted the HTML document including classes and IDs for javascript linking and CSS styling, and generically coded the CSS for a visibly pleasing minimalist website representation that I might update at the tail end of the project, time permitting.

<ins>Javascript Outline</ins>
* State & DOM References\
    `let posts = []` array\
    `let editingPostId = null`\
    `getElementById()` for every element.
* Utility Functions\
    `generateId()`\
    `loadFromStorage()`\
    `saveToStorage()`
* Render Posts: `renderPosts()`
    - Clear container -> loop posts -> `createElement` -> `appendChild` to each card
* Form Validation: `validateForm()`
    - Check title + content not empty -> set error spans -> return true/false
* Form submit handler\
    -`event.preventDefault()` -> `validateForm()`
    - `saveToStorage()` -> `renderPosts()` -> reset form
* `postsContainer` click handler(event delegation)
    - `cancelBtn` click handler
* Initialization (runs on page load)\
posts = `loadFromStorage()` -> `renderPosts()`

Once all files were written, I copleted the required testing.

### Built with

- JavaScript
- Semantic HTML5 markup
- Custom CSS
- DOM Element Selection & Creation
- Dynamic DOM Content & Attributes
- Event Handling
- Form Validation
- Local Storage Implementation

### What I learned

  1. Outlining a path for JS code in alignment with the HTML & CSS files expedites my coding process.

  2. The data-id attribute serves as a bridge between my HTML and JavaScript that lets the event handlers identify exactly which post was clicked without needing to search the DOM. 

  3. Adding complexity requirements and validations to form fields.

  4. State equates to current data held in application memory. The consistent pattern I notice throughout: change state → save → render. Those steps repeat in the submit handler, the delete branch, and the edit branch. I gained an understanding that posts and editingPostId are the points of truth, and that the DOM is always a reflection of that state rather than the source of it.
  
  6. I learned how event delegation works by attaching one listener to a parent container and using event.target to determine what was clicked, and it's more efficient than attaching individual listeners to every button. 
  
  7. I also worked through the difference between create mode and edit mode inside a form handler, controlled entirely by whether editingPostId is null or holds a value. 

## AI Collaboration

  - ChatGPT
    - debugging and Q&A

## Author

Zac White

## Acknowledgments

[developer.mozilla.org](https://developer.mozilla.org/en-US/)
- `date.now()`
- `math.random()`
- `math.floor()`\

[javascript.info](https://javascript.info/)

[jshint.com](https://jshint.com/) 

[MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

 [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

 [html.spec.whatwg.org](html.spec.whatwg.org)

 [Looping through localStorage in HTML5 and JavaScript](https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript#3138591)
  
DOM Manipulation
 [youtube.com](https://www.youtube.com/@TraversyMedia/search?query=DOM%20crash) Traversy Media

## Reflections

1. Although it as time consuming, and delayed coding the JavaScript for this project, drafting an outline after the HTML and CSS code were completed turned out to be a useful exercise, and the outline was a good resource.mI also decided to take a more simplified approach to this assignment, especially foollowing struggles I had with the verification form assignment. That decision condensed the js script file for this project considerably. 

2. I noticed a consistent pattern throughout this project: change state → save → render. That sequence repeats in the submit handler, the delete branch, and the edit branch. Once I internalized that rhythm, the whole file made sense structurally.

3. This go-round, I improved on real-world debugging instincts — reading console errors, tracing mismatched braces, and catching silent bugs.