---
title: My Second Post!
date: '2019-05-06T23:46:37.121Z'
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

```javascript
function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false, id: Date.now() },
        ],
      };

    case TOGGLE_MEMBER:
      return {
        ...state,
        members: state.members.map(member => {
          if (member.id === action.payload) {
            return {
              ...member,
              dragonStatus: !member.dragonStatus,
            };
          }
          return member;
        }),
      };
    default:
      return state;
  }
}
```
