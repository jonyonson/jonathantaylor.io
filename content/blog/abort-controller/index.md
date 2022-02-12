---
title: Canceling a Request Inside an Effect Hook
date: '2029-01-01'
tags: ['javascript', 'react']
draft: true
---


```jsx
useEffect(() => {
    const controller new AbortControler();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
    
    return () => {
      controller.abort()
    };
}, [pokemon])
```
