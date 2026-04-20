# Lab: Random Social Media Posts

## Introduction

This project is a simple social media feature that fetches and displays random posts from an external API. The goal is to retrieve post data and dynamically render it on the page using JavaScript, demonstrating the use of asynchronous programming with async/await.

## Challenge

1. Fetch data from an external API  
2. Display posts dynamically on the webpage  
3. Use async/await for asynchronous operations  

## API Used

https://jsonplaceholder.typicode.com/posts

## Features

- Fetch posts using the Fetch API
- Handle asynchronous operations with async/await
- Dynamically create and display DOM elements
- Display post title and body
- Basic error handling using try/catch

## How It Works

- The application fetches posts from the API on page load
- The response is converted into JSON format
- A function `displayPosts()` loops through the data
- Each post is displayed as:
  - `h1` for the title
  - `p` for the body
  - wrapped inside an `li`
- All posts are appended to the `ul#post-list`

## Project Structure

- `index.html` → Contains the UI structure
- `index.js` → Handles API fetching and DOM manipulation
- `style.css` → Basic styling (if provided)

## Code Features

- Async/Await for cleaner asynchronous code
- Fetch API for external data retrieval
- DOM manipulation using JavaScript
- Separation of logic (fetch vs display)
- Error handling with try/catch

## Project Updates / Changes Made

- Updated project description to match Random Social Media Posts functionality
- Implemented API fetching using Fetch API
- Refactored code using async/await for cleaner asynchronous handling
- Created `displayPosts()` function to dynamically render posts
- Added DOM manipulation using `li`, `h1`, and `p` elements
- Implemented error handling using try/catch
- Ensured posts render inside `ul#post-list`

## Version Control

This project was developed using Git for version control. Regular commits were made to track progress, manage updates, and ensure maintainability of the codebase.

## Learning Outcomes

- Understanding of asynchronous JavaScript
- Practical use of Fetch API
- DOM manipulation techniques
- Error handling in async operations
- Basic project documentation and maintenance practices