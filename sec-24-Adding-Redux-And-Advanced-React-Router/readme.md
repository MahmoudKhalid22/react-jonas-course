## introduction

In this section we're gonna implement the heart of the application by adding shopping cart with redux toolkit and while doing this we'll explore the advanced part of React Router's data loading features and we'll continue some real world use cases of redux

## Modeling the user state with redux toolkit

we'll start working on the user state and we have already decided earlier that this user state is a global ui state and the reason for that we need this piece of ui in many places in the application tree.

## Some trickies

search for reselect in redux
search for toast
search for redux store

- in redux reducer you can call function in the same reducer by this

```
    cartSlice.caseReducers.deleteItem(state, action);
    slicename.caseReducer.functionName(params);
```

- importing store and using them directly in our function that is outside the component but don't overuse it because it is a bit of hacking and deactivate a couple of performace optimizations of redux on this page
