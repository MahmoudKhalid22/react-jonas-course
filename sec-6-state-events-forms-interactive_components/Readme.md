# overview

In this section we will make our components interactive. So to do that we will start learning how to handle events in react and how to update the user interface using extremly important concept of state.

We'll also start building the next project where we are going to focus on state and on building forms in the React way using controlled element

# difference between function and function call

```onClick={alert("something")} => this will execute the function once it starts execute the function component
but onClick=(() => alert("something")) this will execute after clicking <the event>
```

so when we declare the function first we just call the value not the function itself

```
function handleSomething() {
    alert("something");
}

in jsx

<button onClick={handleSomething}>Hanlde</button>
or
<button onClick={() => hanldeSomething}>Handle</button>
but the second approach is very redundent so we use the first one

```
