# Redux and Redux toolkit section

## lesson 1

let's get into one topic of the big course (redux).
For many peoples redux is big and kind of scary thing that find impossible to learn.
For you however it's the opposite because you already know useReducer hook works and therefore learning redux is actually going to be quite straightforward and a lot of fun.

so to make it really easy we're gonna start at the very fundamentals by learning redux in isolation and then use it in small application and convert it to more modern redux toolkit and we even gonna make api requests right inside redux using thunks.

## lesson 2

as always, let's start by getting a good understanding of what Redux actually is and how the mechanics of redux work especially when compared with the userReducer hook.

![](./01.png)

in fact, many developers even say that the context api is the replacement for Redux.
However, the truth is a bit more nuanced than that as we will discuss by the end of the section once you have some experience with both of these tools.

![](./02.png)

![](./03.png)

Let's quickly review useReducer mechanism

![](./04.png)

so with useReducer when we want to update state from an event handler in a component, we start by creating an action, this action is simply an object that usually contains type and payload which is information about how the state should be updated we then dispatch this action to a so called reducer function. the reducer takes the type and the payload and together with the current state calculates the next state, so the new state value and to finish as state updates the component will re-render

we're gonna add two more things onto this in order to learn how redux works.

#### Store

so the first difference between useReducer and redux is that in redux we actually dispatch actions not simply to reducer but instead to a store. So this store is a centralized container where all global state lives. It's like the single source of truth of all global state across the entire application.

The store is also where on or multiple reducers live.

#### Pure Function

just as a reminder each reducer must be a pure function that has the single task of calculating the next state based on the action that was dispatched to the store and the current state that's already in the store as well.

![](./05.png)

Q) Now, you might be wondering why is there multiple reducers int this store ?

A) it's because we should create one reducer per application feature or per data domain to keep things separated e.g.) in a shopping app, you could have one reducer for the shopping cart, one for some user data, and one for application color theme.

Finallly, any component that consumes the state that has been updated in the store will as always get re-rendered by react at least if we're assuming that reusing Redux together with a react app.

#### Action

Let's focus on the action again, so in the real world when we use Redux we usually use function called action creators in order to automate the process of writing actions. So basically, instead of always writing these action objects by hand, we create functions that do this automatically. This has the advantage to keep all actions in one central place which reducer bucks because developers don't have to remember the exact action type strings.

Just note that this is optional and not a feature of Redux it's just how we build real world apps.

## lesson 3 ( Creating a reducer bank account ( look at the code ) [here](./redux-intro/src/store.ts) )

## lesson 4 ( Create the redux store ( look at the code )

## lesson 5 ( Function Creators )

## lesson 6 ( Adding more state: Customer )

## lesson 7 ( Professional Redux File Structure: State Slices )

## lesson 8 ( Back to react, connecting our redux file to react )

## lesson 9 ( Dispatching actions from our react app )

## lesson 10 ( Legacy way of connecting component to redux )

## lesson 11 ( Redux middleware and Thunks )

Let's now take a look at how we can extend the functionality of redux by using something called middleware.

![](./08.png)

so let's say that we wanted to make an asynchronous call to some API so where we could actually do that in redux?

- We can definitely not make the API call inside a reducer because reducers need to be pure functions with no side effects, so by itself, a Redux store doesn't know anything about performing asynchronous logic like this.
  It only know how to synchronously dispatch actions and update the state, Therefore, any async operation like that API call need to happen outside a reducer.

- Q) So instead, should we maybe fetch the data inside the component and then dispatch an action to the store with that received data ?

- A) Well, that is actually possible but it's not the ideal solution and <u>the reason for that is that </u> we usually want to keep our component clean and free of data fetching and we also want our important data fetching logic encapsulated somehwhere, so all in one place and not have it spread all over the application, therefore fetching data inside components like we have been doing all this time, is not ideal

- Q) But if not in the store and not in the components, then where do we perform async actions ?

- A) Well, that's where Middleware comes into action. So in Redux, Middleware is basically a function that sits between the dispatching and the store. This means that middleware allows developers to run some code after dispatching an action, but before that action reaches the reducer in the store. And therefore, this is the perfect place for our asynchronous API calls, as well as other operations, such as setting timers, logging to the console, or even pausing and cancelling the action altogether.

So in essence, Middleware is the go-to place for side effects in the Redux Cycle

We can write middleware function oursleves, but usually, we just use some third party package. and the case of async operation ( the most popular middleware in Redux is called Redux Thunk )

let's analyze what happens
1- the action will no longer be immediately dispatched.
2- it first get into the middleware ( into the thunk in this case )
3- then we can start fetching some data inside the thunk and it could also be some other async operations
4- once the data arrives we will place it into the action payload
5- the action get dispatched into the store and the state get updated

![](./09.png)

## lesson 12 ( Making an api call with Redux Thunks )

## lesson 13 ( Redux Dev Tool )

## lesson 14 ( What is Redux toolkit )

![](./11.png)

## lesson 15 ( Creating the store with RTK )

## Questions

#### q) the difference between redux and useContext

Redux Pros for Many UI Global States:

Centralized Store: Redux keeps all your global state in one place, making it easier to track and reason about how your application changes.
Predictable Updates: Updates to the state are handled through pure reducer functions, ensuring predictable and consistent behavior.
Testability: Redux's architecture promotes writing isolated and testable state logic.
Scalability: Redux scales well for complex applications with numerous interdependent state changes.
Redux Cons to Consider:

Complexity: Setting up and learning Redux has a steeper learning curve compared to built-in React hooks.
Boilerplate: Redux requires more boilerplate code for actions, reducers, and store setup.
Overkill for Simple Apps: For smaller applications with limited global state, Redux might be an unnecessary overhead.
Alternatives to Redux for Simpler Scenarios:

useContext: As you mentioned, useContext can be a lightweight and effective way to share state across a few components.
React State Management Libraries: Libraries like Zustand or MobX offer simpler APIs compared to Redux while still providing features for global state management.
So, When is Redux Ideal?

Redux shines in these scenarios:

Large applications with extensive global state: When your app has numerous interconnected UI state pieces that need to be shared and updated across various components.
Complex state updates: If your state updates involve complex logic or dependencies between different parts of the state.
Need for advanced features: When you require features like middleware for asynchronous operations, time-travel debugging, or complex state normalization techniques.

## Vocabulary

crystal clear -> واضحة وضوح الشمس
thunks -> دوال تأجيلية
defer -> تأجيل
boilerplate -> نموذجي
