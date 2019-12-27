---
title: 'An Introduction to React Hooks: useEffect()'
date: '2019-12-27'
---

I previously wrote about the [useState hook](/use-state-hook) which allows us to make stateful functional components. So, we are now managing state in a functional component, but what happens when we need to fetch some data or manually change the DOM. Traditionally, these "side effects" have been handled by React's lifecycle methods, which are only availabe inside of a class component, and allow us to run some code whenever a component mounts and unmounts.

```jsx
import React, { Component } from 'react';

class ResizableWindow extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
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
    );
  }
}
```
<a class="code-sandbox-link" href="https://codesandbox.io/s/use-effect-class-demo-dc5mk" target="_blank">💻 Try it on Code Sandbox</a>

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
<a class="code-sandbox-link" href="https://codesandbox.io/s/use-effect-functional-demo-3ki4d" target="_blank">💻 Try it on Code Sandbox</a>

#### Effects Requiring Cleanup

In the previous example, we add an event listener to the component that needs to be removed when the component unmounts. In our class example, we remove the event listener in `componentWillUnmount`. With the effect hook, if our effect requires a cleanup (code we would have previously run in `componentWillUnmount`), we simply return a function. React will run the function when it is time to clean up.

```jsx
useEffect(() => {
  window.addEventListener('resize', updateDimensions);
  // highlight-range{1-3}
  return () => {
    window.removeEventListener('resize', updateDimensions);
  };
});
```
#### Prevent Effects From Running on Each Update

In a class component, if we want to prevent an effect from running every time a component updates, we could check for an update in `componentDidUpdate`.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.name !== this.state.name) {
    document.title = `Welcome, ${this.state.name}!`;
  }
}
```

The `useEffect` Hook API has a built-in way of handling these comparisons. The Effect Hook takes two arguments. The first argument is a function and the second is an optional array that determines how often that function is executed. By default (without the second argument), the function is run after the first render and then after every update. React will avoid running the effect on any update where the value listed in the array provided as the second argument has not changed.

```jsx
  useEffect(() => {
    document.title = `Welcome, ${name}!`;
  // highlight-next-line
  }, [name])
```

This dependency array can hold multiple values and the effect will only run when any one of these values gets updated.

```jsx
  useEffect(() => {
    document.title = `Welcome, ${name}! You have ${messages} unread messages.`
  }, [name, messages])
```

We can also prevent the effect from running on any subsequent updates and have it only run once after the initial render. Passing an empty array as the second argument to `useEffect()` tells React that this effect does not depend on props or state and does not need to re-run.

```jsx
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then(res => {
        setMessages(res.data);
      })
      .catch(err => setError(err.message));
  // highlight-next-line
  }, []); // will only run once after the initial render
```
