# overview

In this section we will make our components interactive. So to do that we will start learning how to handle events in react and how to update the user interface using extremly important concept of state.

We'll also start building the next project where we are going to focus on state and on building forms in the React way using controlled element

# difference between function and function call

```
onClick={alert("something")} => this will execute the function once it starts execute the function component
```

but

```
onClick=(() => alert("something")) this will execute after clicking <the event>
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

# States

- without doubt state is the most important concept in react. So everything basically revolves around state in React.

## What state actually is ?

1- it is basically data that a component can hold over time, and we use it for information that a component needs to remember throughout its lifecycle.
Therefore, we can think of state as being the memory of the component.
examples
![](./01.png)

what all these pieces of state have in common is that in the application, the user can easily change these values.
for example, when they read a notification, the count will go down by one, or when they click on another tab, this tab will become active.
And therefore each of these components needs to hold data over time, so over the lifecycle of the application.

so that pieces of information is a (piece of state)
![](./02.png)

2- let's now move on to the most important aspect of state.
which is the fact that updating state triggers the React to re-render the component.
again whenever we update a piece of state in a component that make react re-render this component in the user interface.
So it will create a new updated view for that component.
And a component's view is basically just the component visually rendered on the screen, so in the user interface.
we talk about single component a part of user interface and we call it a view.
and when views combined together, then make up the final user interface.

remember! state is how react keeps the user interface in sync with data. we change the state, we change the ui.

![](./03.png)

![summary](./04.png)

## why does we need it ?
