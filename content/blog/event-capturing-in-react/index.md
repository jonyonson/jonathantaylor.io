---
title: Event Bubbling and Capturing in React  
date: '2022-02-12'
tags: ['javascript', 'react']
---

By default, React event handlers are triggered by an event in the bubbling phase. This means that events are handled by the innermost element and propagated to outer elements. However, in some cases, you may want to trigger event handlers in the capturing phase. In React, a click event is triggered using capture with `onClickCapture`.

```jsx
<button onClickCapture={handleClick}>Click me</button>
```

You can append `Capture` to any event name to register an event handler for the capture phase.

```jsx
<button
  onFocusCapture={handleFocus} 
  onBlurCapture={handleBlur} 
  onTouchEndCapture={handleTouchEnd} 
  onTouchStartCapture={handleTouchStart}>
  A few example event handlers using capture
</button>
```

## Event Propagation

Event propagation refers to the process of an event being handled by an element and then traversing through the other elements of the DOM. When a click event is fired on a button, unless steps are taken to stop propagation, other elements in the DOM will also fire any registered click events. The process, or direction, of how that event propagates is determined by the event phase registered by the event listener.


## Bubbling

When an event that is registered for the bubbling phase is triggered on an element, the event is handled by the target element and propagated to its parent element. If the parent element has an event handler registered for the bubbling phase, it will be triggered and the event will continue to propagate up the DOM.


```jsx
<div onClick={() => alert("outer")} className="outer">
  <div onClick={() => alert("inner")} className="inner">
    click
  </div>
</div>
```

<a class="code-sandbox-link" href="https://codesandbox.io/s/use-capture-9hj5g" target="_blank">💻 Try it on Code Sandbox</a>

In this example, the click event is registered on the bubbling phase as that is the default for all React event handlers. The inner `div` will fire it's event handler first and then the outer `div`'s `onClick` will fire.


## Capturing

When we register an event handler on the capturing phase, the event is handled by the ancestor elements it and traverses downwards to the target element. In the following example, the click event is handled by the parent element first reslting in the `alert` firing for the outer `div` first.

```jsx
<div onClickCapture={() => alert("outer")} className="outer">
  <div onClickCapture={() => alert("inner")} className="inner">
    click
  </div>
</div>

```

<a class="code-sandbox-link" href="https://codesandbox.io/s/use-capture-9hj5g" target="_blank">💻 Try it on Code Sandbox</a>

## Stop Propagation

To stop further propagation of the event in both capturing and bubbling phases, React utilizes the same `stopPropagation` interface as the browser. In the following example, the click event is handled first by the target element (because it is registered on the bubbling phase with `onClick`) and further propagation is halted.


```jsx
<div onClick={() => alert("outer")}>
  <div
    onClick={(e) => {
      e.stopPropagation();
      alert("outer element event handler will not fire");
    }}
  >
    click
  </div>
</div>
```

<a class="code-sandbox-link" href="https://codesandbox.io/s/use-capture-9hj5g" target="_blank">💻 Try it on Code Sandbox</a>
