---
title: Converting a String to a Number in JavaScript
date: '2019-12-01'
tags: ['javascript']
---

There are several ways to convert a string to a number in JavaScript. Let's examine some of these solutions and some of their caveats.

## The Number object

The `Number` object is a wrapper object that is created using the `Number()` constructor, but it can also be used without the `new` keyword to convert numeric strings and null to numbers.

```javascript
typeof new Number('100'); // object
typeof Number('100'); // number

Number('100'); // 100
Number('100.8'); // 100.8
Number(new Date('December 1, 2019')); // 1575180000000
Number(null); // 0
Number(''); // 0
Number('hello'); // NaN
Number('0x11'); // 17
```

## Unary plus (+)

The unary plus operator will attempt to convert any string it precedes into a number.

```javascript
+'100'; // 100
+'100.8'; // 100.8
+new Date('December 1, 2019'); // 1575180000000
+null; // 0
+''; // 0
+'hello'; // NaN
+'0x11'; // 17
```

## parseInt() and parseFloat()

Strings can be converted to integers by calling the `parseInt()` function with two parameters. The first parameter is the string to convert and the second parameter is the radix. The radix is an integer between 2 and 36 that represents the base in mathematical numeral systems. If a radix is not provided, JavaScript will make some assumptions that can lead to unreliable behavior.

```javascript
parseInt('200.8', 10); // 200
parseInt('11111111', 2); // 255
parseInt('0xF', 16); // 15
```

If you wish to return a number that retains the decimal, `parseFloat()` can be used. `parseFloat()` only takes one argument, the string which you wish to convert to a floating point number.

```javascript
parseFloat('200.8'); // 200.8
parseFloat('200.8888').toFixed(2); // 200.88
```
