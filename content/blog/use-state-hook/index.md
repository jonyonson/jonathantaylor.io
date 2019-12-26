---
title: "An Introduction to React Hooks: useState()"
date: '2019-08-12'
---

React introduced the Hooks API as of version 16.8 which gave us the ability to utilize (or "hook into") certain features of React within a functional component that previously required the use of a class component. React provides some built-in hooks as well as the ability to create our own custom hooks. These custom hooks allow us to reuse some stateful logic between components. The focus of this post will be on the `useState` hook which allows us to make our functional components stateful.

## State Management in React

Traditionally in React, only class components had the ability to manage their own state. Function components were even often referred to as "stateless functional components". We were often encouraged to use functional components when state and lifecycle methods weren't necessary. This paradigm led to the annoyance of having to covert functional components to class components if it was ever determined that we needed to add state (or access lifecycle methods) in our component.

### Class Components

The way we manage state in class components is by initializing state values in the `state` property and updating these values with the `setState` method.

```jsx
class Theme extends Component {
  state = {
    theme: 'dark',
  };

  toDarkTheme = () => this.setState({ theme: dark });
  toLightTheme = () => this.setState({ theme: light });

  render() {
    return (
      <div className={this.state.theme}>
        {theme === 'light' ? (
          <button onClick={this.toDarkTheme}>🌛</button>
        ) : (
          <button onClick={this.toLightTheme}>🌝</button>
        )}
      </div>
    );
  }
}
```

### Function Components and the useState Hook

React provides us with the `useState` hook which gives us the ability to manage state within a functional component. `useState` is simply a function that takes one argument, our initial state value, and returns an array of two items. The first item in the returned array is the current value of our state and the second item is a function to update that state.

```jsx
import React, { useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState('dark');

  const toDarkTheme = () => setTheme('dark');
  const toLightTheme = () => setTheme('light');

  return (
    <div className={theme}>
      {theme === 'light' ? (
        <button onClick={toDarkTheme}>🌛</button>
      ) : (
        <button onClick={toLightTheme}>🌝</button>
      )}
    </div>
  );
}
```
<a class="code-sandbox-link" href="https://codesandbox.io/s/usestate-l14g6" target="_blank">💻 Try it on Code Sandbox</a>

The first line within our `Theme` component example shows how we initialize a state value by calling `useState` and passing it the initial state value. We are also utilizing array destructuring to gain access to the two values returned by `useState`.

In order to update the state value, we call the `setTheme()` updater function that was returned to us from `useState`. This updater function takes an argument that represents our new state value. It should be noted that `theme` and `setTheme` could be called anything we would like, but naming these values `thing` and `setThing` is a widely used naming convention.

#### Functional Updates

Just as calls to `setState` <a href="https://reactjs.org/docs/faq-state.html#why-is-setstate-giving-me-the-wrong-value" target="_blank">are asynchronous</a>, so too are updates to state using the `useState` hook. Whenever we are updating state based on the previous state, in order to ensure the value returned by `useState` is up to date, you should pass a function to your updater function. As shown in the highlighted line in the example below, we pass `setTheme` a function which passes in the current value of `theme` and returns a new value based on the previous state.

```jsx
import React, { useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState('dark');

  // highlight-next-line
  const toggleTheme = () => setTheme((theme) => !theme);

  return (
    <div className={theme}>
      {theme === 'light' ? (
        <button onClick={toggleTheme}>🌛</button>
      ) : (
        <button onClick={toggleTheme}>🌝</button>
      )}
    </div>
  );
}
```

<!-- `video: https://www.youtube.com/embed/dpw9EHDh2bM` -->
