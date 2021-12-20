# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

My challenges on this task were, Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [https://github.com/iddimsangi/ReactTodoApp](https://github.com/iddimsangi/ReactTodoApp)
- Live Site URL: [https://myreacttodoapplication.netlify.app](https://myreacttodoapplication.netlify.app)

## My process

### Built with

- React 
- HTML 
- CSS
- CSS Flexbox


### What I learned
I've learnt to style react components, states manipulations , react hooks (i.e useEffect ansd useState) also css flexbox and html input type checkbox.

To see how you can add code snippets, see below:
Snippets that I'm proud of:
```css checkbox
  .checkboxIn:checked ~ .App .App-container{
    background-image: url("../images/bg-desktop-light.jpg");
    .imgIcons{
      .icon-moon{display: inline-block;}
      .icon-sun{display: none;}
      
    }
  
  }
  
  .checkboxIn:checked + .App{
  background-color: #fff;
  }
```
How to store and retrieve state from Local Storage
```  useEffect(() => {
    const receivedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (receivedTodos) setTodos(receivedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log("here");
  }, [todos]);
```


### Useful resources

- [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html) - This helped me for Use of UseEffect hook. I really liked this pattern and will use it going forward.


## Author

- Website - [iddi msangi](https://imsangi.online/)
- Frontend Mentor - [@IDDIMSANGI](https://www.frontendmentor.io/profile/iddimsangi)
- Twitter - [@iddi_a](https://twitter.com/iddi_a)
- Github - [iddimsangi](https://github.com/iddimsangi)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
