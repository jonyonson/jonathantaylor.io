---
title: 'An Introduction to React Hooks: useEffect()'
date: '2019-12-26'
---

React introduced the Hooks API as of version 16.8 which gave us the ability to utilize (or "hook into") certain features of React within a functional component that previously required the use of a class component. I previously wrote about the [useState hook](/use-state-hook) which allows us to make stateful functional components.

Now we are managing state in a functional component. Awesome! But what happens when we need to fetch some data or manually change the DOM. Traditionally, these "side effects" have been handled by React's lifecycle methods, which are only availabe inside of a class component, and allow us to run some code whenever a component mounts and unmounts.

```jsx
import React, { Component } from 'react';

class ResizableWindow extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div>
        <p>width: {this.state.width}px</p>
        <p>height: {this.state.height}px</p>
      </div>
    )
  }
}
```
<p class="code-sandbox-link-wrap">
  <a class="code-sandbox-link" href="https://codesandbox.io/s/use-effect-class-demo-dc5mk" target="_blank">💻 Try it on Code Sandbox</a>
</p>

In this class component we are are adding an event listener to the window object when the component mounts using `componentDidMount` and we are removing the event listener in `componentWillUnmount`. 

### The Effect Hook

The Hooks API combines the functionalities of these lifecycle methods into the `useEffect()` hook and gives us the ability to perform side effects in our function components. 

```jsx
import React, { useState, useEffect } from 'react';

function ResizableWindow() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  });

  return (
    <div>
      <p>width: {width}px</p>
      <p>height: {height}px</p>
    </div>
  );
}
```
<p class="code-sandbox-link-wrap">
  <a class="code-sandbox-link" href="https://codesandbox.io/s/use-effect-functional-demo-3ki4d" target="_blank">💻 Try it on Code Sandbox</a>
</p>

#### Effects Requiring Cleanup

In the previous example, we add an event listener to the component that needs to be removed when the component unmounts. In our class example, we remove the event listener in `componentWillUnmount`. With the effect hook, if our effect requires a cleanup (code we would have previously run in `componentWillUnmount`), we simply return a function.  React will run the function when it is time to clean up.

```jsx
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    // highlight-range{1-3}
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  });
```

`useEffect()` takes two parameters. The first parameter is a function and the second parameter is an optional array that determines how often the function passed as the first parameter is executed. By default (without the second parameter), the function is run every time the component renders.




