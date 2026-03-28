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
    `let editingPostId = null`
    `getElementById()` for every element.
* Utility Functions\
    `generateId()`\
    `loadFromStorage()`\
    `saveToStorage()`
* Render Posts: `renderPosts()`
    - Clear container -> loop posts -> `createElement` -> `appendChild` to each card
* Form Validation: `validateForm()`
* Form submit handler\
    -`event.preventDefault()` -> `validateForm()`
    - `saveToStorage()` -> `renderPosts()` -> reset form
`postsContainer' click handler(event delegation)
    - `cancelBtn` click handler
* Initialization (runs on page load)\
posts = `loadFromStorage()` -> `renderPosts()`





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

  1. Progressive console logging and intermediate usage of console logging in terminal and synchronicity with chrome dev tools. This really helped me out when coding typos, or I had invalid variables present. I could correct them on the spot.
  
  Practicing console logging checks and balances with chrome dev tools added a considerable amount of time to my completion of this assessment, and I will be more conservative with my console logging (especially those left in this script) on future projects. 

  3. Using the Constraint Validation API error handling and validations.

  3. Adding complexity requirements and validations to form fields.


## AI Collaboration

  - ChatGBT
    - debugging and Q&A

## Author

Zac White

## Acknowledgments

  - [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern).  
  - [MDN autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete) autocomplete
  - [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
  - [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  - [html.spec.whatwg.org](html.spec.whatwg.org)
  - [Looping through localStorage in HTML5 and JavaScript](https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript#3138591)
  
DOM Manipulation
  - [youtube.com](https://www.youtube.com/@TraversyMedia/search?query=DOM%20crash) Traversy Media
  - [jshint.com](https://jshint.com/) 

## Reflections

1. 

-

2. 

-

3. 

-