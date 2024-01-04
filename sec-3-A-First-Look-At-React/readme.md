## (1) Why react

#### (a) How websites were built in the past ? How we transitioned to the new way ? How that lead to the rise of frontend frameworks ?

Before 2010 , all websites are rendered by the server (Server side rendering)

A resulting HTML, CSS and javascript from the server is sent to the client side and painted on the web page by browsers

An Example: Wordpress

javascript is included in these pages to add simple dynamics to the page, add some animations and somthing like that.
And usually a very popular library at the time called jQuery was used for this because it makes javascript work the exact same way across all browser back then.

However, overtime developers started writing more and more javascript code to be excuted by the browser, until at some point these became fully fledged web applications which then led to the rise of so called single page applications.

so these are basically webpages that are rendered on the client side not the server.
so it shifted from the server to the client.

so now we don't call these webpages anymore but instead web applications.
now this web application needs to use the data which usually come from backend in the form of an API.

these spa feels that you are using a native desktop or mobile application.so you can click on links or submit forms without the page ever reloading. so you're technically on the same page and therefore it's calles single page application.

But Server side rendering is actually making a comeback right now. so it's slowly getting modern again driven by frameworks that are given by the top of the modern client side rendering frameworks such as Nextjs, Remix and others.

![Explanation](./01.jpg)

##### (b) How do we build single page applications ?

we don't want to build it with vanilla javascript because there are actually several problems when we build large scale applications with vanilla js

- First Let's establish that any frontend application is about handling data then displaying that data in a nice user interface and user interface needs to stay in sync with the data and it's very hard problem to solve
  ![](./02.jpg)
  ![example](./03.jpg)

1- Because it requires a large amount of direct DOM traversing and manipulation and this is guaranteed to become a absolute nightmare in complex applications because our code become extremly complex and hard to understand and we will probaly end up with the huge mess spagetti code

2-states (such as simple text or numbers) is usually stored in the DOM,so right in the HTML elements themselves rather than in central place in the application. and this make the spaggti code even harder to understand and even worse and it'll most certainly introduce many bugs into our application.

![](./04.jpg)

so at this point, you might as well just use
a battle tested framework like react.

##### (c) Why do frontend frameworks exist ?

![](./05.jpg)

## (2) React vs. vanilla js

To get the first feeling of how react keep user interface sync with state let's compare the advice app that we built in the first section with a vanilla js implementation and reactjs.

[codesandbox link](https://codesandbox.io/s/react-first-app-advice-52879f)

1- They have very different philosophy

2- every element in html you need to give it a class to select it by javascript while you don't need that with react

3- you select elements manually by js and give give them conntent manually but you don't need that in react

4- you might say this is small there is no need to react and this is true for small applications like this but as soon as we get just a little bit bigger it starts kind of getting out of control so you have to selecting tons of elements and updatign them manually and make a lot of code that with react we don't need this

## (3) what is react

- Abstraction and high level overview of react and how it works

1. what is react

   ![](./06.jpg)

   Let's extend this definition a little bit so that becomes more helpful
   ![](./07.jpg)

   ![Based on component](./08.jpg)

   ![](./09.jpg)

   ![declerative](./10.jpg)

   the react app keeps the user interface sync with data now let's call data (state)

   ![state driven](./11.jpg)
   and that is the whole reason why react called react in the first place (it reacts to state changes by rerendering the ui)

   ![javascript library](./12.jpg)

   ![Extremly popular](./13.jpg)

   ![created by facebook](./14.jpg)

   ![summary](./15.jpg)

   React does all this by employing something called virtual dom, a fiber tree, one way data flow and many other techniques that we will study throughout this course

## (4) a new react apps

#### (a) setting up tools

(vscode - nodejs - some extensions like(eslint - prettier - ....)) and adding some snippets

#### (b) pure react

created a new html page (in the pure react folder) [here](./01-pure-react/index.html) and showed us how react worked as a pure in html page and used useState and useEffect to display a clock in this page, check the code.

#### (c) Quick look at react official documentation

navigating into documentation

#### (d) Setting up a new react project: The options

As we just learned in the real world we don't just write React apps in a single javascript file without any tooling.
so let's now learn the options to setup our react app

and now the two most important options:
![](./16.jpg)

- create-react-app

a- was developed many years ago in order to make it really easy for developers to scaffold new react apps.

b- all tools is already preconfigured out of the box specifically for React.
so an app created with create-react-app automatically comes with a development server webpack
for module bundling and of course important developer tools, which include a linter like ESLint,
a code formatter like prettier, a testing library like Jest, and of course Fable for enabling the
latest javascript features.

c- The problem with this option (it was developed many years ago) and so it uses some slow and kind of outdated
technologies under the hood, and in particular, the webpack bundler so the team behind create-react-app has stopped innovating and therefor right now the recommendation is to not use create-react-app for real world projects anymore.

It's, however, still a perfectly fine way to get start quickly for tutorials, courses, or simple experiments.

(So you might have read all the articles saying that create-react-app is dead and don't use it anymore) but that's only true for building real-apps. Because of the problem that large scale apps will face, like slow refresh times.

- vite

a- if you do want to build real world apps with react then vite is the perfect choice

b- vite is quite different from create-react-app as it's basically simply a modern build tool so a bit like a modern webpack but which happens to also contain a starter template for setting up brand new React applications.

c- the most annoying and painful is setting up ESLint to play nice with react. so that can be a bit of work and it can go wrong.

d- The reason of using vite in the first place is that it is extremly fast to automatically refresh the page when the code changes which is called (Hot Module Replacement (HMR)) , also bundling is extremly fast too which for large scale applications can really make a difference because when you have to wait one or two seconds for each page to refresh it can become really annoying overtime. with vite each the page will update almost intstantly each time we save our code and want to see the changes on the screen.

---

you might have read in the officail documentation of react that the react team now advises developers to use react frameworks such as nextjs or remix to build new projects

Frameworks like nextjs contain solutions like routing, data fetching, and server side rendering so things that react itself doesn't provide easily out of the box.

So essentially a react framework is a framework built on top of the react library and which is going to make it easier to build apps.

Of course you need to learn react itself first.

![](./17.jpg)

#### (e) Setting up a project with create react app

cmd prompt: npx create-react-app name-of-the-app

### (5) Questions

###### is vuejs client side rendering or server side

###### ChatGPT

- Vue.js is a JavaScript framework primarily designed for client-side rendering. This means that Vue.js applications run in the browser and generate the user interface on the client side. The browser downloads the necessary HTML, CSS, and JavaScript files and processes them to render the application.

- However, Vue.js can also be used for server-side rendering (SSR) through a separate package called "Nuxt.js." Nuxt.js is a framework built on top of Vue.js that allows you to create universal applications with server-side rendering. With Nuxt.js, you can choose whether to render pages on the server or in the client, depending on your application's requirements. Server-side rendering can improve performance and provide better search engine optimization (SEO) compared to purely client-side rendering.

###### angular, reactjs, vuejs lauched year

###### ChatGPT

Here are the launch years for Angular, React.js, and Vue.js:

Angular:

AngularJS (Angular 1): Released in 2010.
Angular (Angular 2 and subsequent versions): Angular 2 was released in 2016.
React.js:

React.js: Initially released in 2013.
Vue.js:

Vue.js: Initially released in 2014.
These frameworks and libraries have since evolved, with new versions and updates being released regularly to enhance functionality, performance, and developer experience. Keep in mind that the information provided here reflects the initial release years of these technologies.

###### give me the difference between framework and library

###### ChatGPT

A framework and a library are both tools used in software development, but they serve different purposes and have distinct characteristics.

Library:
A library is a collection of pre-written code that developers can use in their programs to perform specific tasks or functions. Libraries typically consist of functions, classes, and procedures that you can call from your code to handle common tasks. The control flow of the program remains with the developer, who decides when and how to use the library's functions.

For example, if you are building a web application and you use a library like jQuery, you can call its functions to manipulate the DOM (Document Object Model) easily. However, the overall structure and flow of your application are determined by you.

Framework:
A framework, on the other hand, is a more comprehensive and structured set of tools, libraries, and guidelines that provide a specific way to build and organize software. A framework dictates the overall architecture and flow of the application. Developers build their code within the framework, and the framework itself decides when and how to call the developer's code.

Frameworks often include libraries, but the key distinction is that the control flow in a framework is inverted compared to a library. In a framework, the framework code calls the developer's code, whereas in a library, the developer's code calls the library.

For instance, in web development, if you are using a framework like Django or Ruby on Rails, the framework handles many aspects of the application, such as routing, database interactions, and request handling. You provide specific code (such as defining routes or models), and the framework orchestrates the overall operation of the application.

In summary, while both frameworks and libraries provide reusable code for developers, the primary difference lies in the control flow: libraries allow developers to call their code, while frameworks dictate the overall flow and call the developer's code.
