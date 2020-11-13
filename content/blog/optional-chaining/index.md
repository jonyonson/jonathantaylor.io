---
title: Optional Chaining for JavaScript
date: '2020-10-14'
tags: ['javascript']
---

Introduced in ES2020, the optional chaining operator, allows for a simple way to check the value of a deeply nested property within chained objects. Traditionally in JavaScript, getting the value of a deeply-nested property meant validating each reference in the chain.

```javascript
const user = {
  name: 'Cosmo Kramer',
  address: {
    home: {
      street: '129 West 81st St.',
      unit: '5B',
      city: 'New York',
      state: 'NY',
      zip_code: '10024',
    },
  },
};

const homeZipCode =
  user.address && user.address.home && user.address.home.zip_code;
// '109024'

const workZipCode =
  user.address && user.address.work && user.address.work.zip_code;
// udefined
```

If the reference to a value deep within a chain of nested objects is `null` or `undefined`, it will throw a `TypeError`.

```javascript
const workZip = user.address.work.zip_code;
// throws a TypeError since `user.address.work` is undefined
```

## The Optional Chaining Operator

The optional chaining operator (`?.`) allows us to simplify our expression when chained properties may be nullish (`null` or `undefined`). If the value preceding the optional chaining operator is `null` or `undefined`, the expression short-circuits and returns `undefined`.

```javascript
const homeZipCode = user.address?.home?.zip_code; // '10024'
const workZipCode = user.address?.work?.zip_code; // undefined
```

## Handling Defaults

The [nullish coalescing operator](/nullish-coalescing) (`??`) can handle instances where a value other than `undefined` is desired for the nullish reference.

```javascript
const workZipCode = user.address?.work?.zip_code ?? 'N/A';
```
