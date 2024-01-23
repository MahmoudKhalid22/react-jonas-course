# Overview

This time is going to be how to think components, composition, and reusability

# Lesson II (Setting up a new project called use popcorn)

Just an abstraction about the project that we are going to build

# How to split a UI into component

Q ) How to split a UI into component and when should we create a new component ?

one way ) is by looking at component size so we can classify every component based on its size, which means that we can place every component on axis of component size.

![](./01.png)

at many times, none of these extremes(huge or small) are ideal.

imagine that we want to build this simple card in the picture.

- one way of building would be create just one huge componenet for the entire card. ( that will create a whole set of problems [first, there is way too much stuff going on in this component, so it has way too many responsibilities ], [second, the component is too large when it receives too many props in order to work properly ] ). so in general these two problems make it too hard to reuse the component which is the advantage of components in the first place.

Does that mean we should use the opposite and create many small components like this one on the left side

- another way (create many small components) / that would probably also a big terrible idea as well.
  if we would build a UI for the entire app in this way we would end up with 100 or 1000 of components, Too abstracted, confusing codebase.

![](./02.png)

So most of the times, the goal is to create components that strike the right balance between being too specific and too board (Large and small)

![](./03.png)

- prefer coding style / as you like some people just prefer larger component and some people prefer smaller component. so create the component in a way that works best for you so that you can stay as productive as possible.

#### Let's actually dig a bit deeper in these criteria

Something like a framework that helps create a new components from bigger components.

- the idea when you're creating a new component and you're in doubt about what the component should include, just start with relatively big component and then split this bigger component into smaller components as it becomes necessary.
  So when does it become necessary ?
  there are 4 criteria comes into play again in this pic :-

![](./04.png)

#### A few more general guidelines

![](./05.png)

![](./06.png)

## Componenet Categories

![](./07.png)

naturally because we shouldn't force our compoenents into one of these categories.

## Props Drilling

in the project.

## Component Composition

![](./08.png)

![](./09.png)

## Fixing Prop drilling with composition

in the project [here](./usepopcorn/src/App.tsx)

## Using composition to make a reusable box

in code [here](./usepopcorn//src/App.tsx)

## Passing Elements as props alternative to children

```
  <Box element={<ListMovies movies={movies} />} />
```

it is an alternative way to children but children way is preferable so we keep it in the code
