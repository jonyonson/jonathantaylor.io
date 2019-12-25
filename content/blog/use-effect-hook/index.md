---
title: 'An Introduction to React Hooks: useEffect()'
date: '2019-12-24'
---

React introduced the Hooks API as of version 16.8 which gave us the ability to utilize (or "hook into") certain features of React within a functional component that previously required the use of a class component. I previously wrote about the [useState hook](/use-state-hook) which allows us to make stateful functional components.

So, now we are managing state in a functional component. Awesome! But what happens when we need to fetch some data or manually change the DOM. Traditionally, these "side effects" have been handled by React's lifecycle methods which allow us to run some code whenever a component mounts and unmounts.

```jsx
class ResizableWindow extends Component {
  state = {
    width: 0,
    height: 0
  }

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

```jsx
function ResizableWindow() {
  const [width, setWidth] = useState();
  const [height, setHeight] useState();

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div>
      <p>width: {width}px</p>
      <p>height: {height}px</p>
    </div>
  );
}
```



