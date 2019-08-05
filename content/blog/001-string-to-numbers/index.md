---
title: Converting a String to a Number in JavaScript
date: '2019-07-05'
---

There are several ways to convert a string to a number in JavaScript. Let's examine some of the caveats that come along with each.

## parseInt() and parseFLoat()

Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, at iste accusamus laudantium ad similique deserunt vero cum architecto minima dignissimos minus nam quidem quas adipisci accusantium neque debitis?

```javascript
parseInt('11111111', 2); // 255
parseInt('0xF', 16); // 15
parseInt('200.8', 10); // 200
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, at iste accusamus laudantium ad similique deserunt vero cum architecto minima dignissimos minus nam quidem quas adipisci accusantium neque debitis?

## The Number object

Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, at iste accusamus laudantium ad similique deserunt vero cum architecto minima dignissimos minus nam quidem quas adipisci accusantium neque debitis?

```javascript
Number('15.8'); // 15.8
Number('15'); // 15
```

## Unary plus (+)

Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, at iste accusamus laudantium ad similique deserunt vero cum architecto minima dignissimos minus nam quidem quas adipisci accusantium neque debitis?

```javascript
const num = '100';
+100; // 100;
```
