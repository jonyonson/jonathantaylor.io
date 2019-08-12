---
title: A Gentle Introduction to React Hooks
date: '2019-07-11'
---

React introduced the Hooks API as of version 16.8 which gave us the ability to utilize (or "hook into") certain features of React within a functional component that previously required the use of a class component. React gives us a few built-in hooks as well as the ability to create our own "custom hooks". These custom hooks allow us to reuse some stateful logic between components. The focus of this post will be on one of the built-in hooks which allow us to make our functional components stateful: the `useState` hook.

## ~~Stateless~~ Functional Components

- doesn’t merge the old and new state together

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

```jsx
function Theme() {
  const [theme, setTheme] = React.useState('dark');

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

`video: https://www.youtube.com/embed/dpw9EHDh2bM`
