# Browser Mondas TS

<p align="center">
  <a href="https://www.npmjs.org/package/browser-monads-ts">
    <img src="https://img.shields.io/npm/v/browser-monads-ts/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/browser-monads-ts">
    <img src="https://img.shields.io/npm/dm/browser-monads-ts.svg" alt="Monthly download on NPM" />
  </a>
</p>

> This package is inspired by [browser-monads](https://github.com/Jense5/browser-monads) currently without support from the author.

Provide interfacs for the `window` and `document` variables of a webpage.

## What is a monad?

> In functional programming, a monad is an abstraction that allows structuring programs generically. Supporting languages may use monads to abstract away boilerplate code needed by the program logic.
>
> -Wikipedia - [Monad (functional programming)](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>)

You don't really have to know what a monad is since the variables provided by this library aren't _really_ monads. Let's take a look at the `window` variable to get a basic understanding. The main purpose of this variable is that it _may be a window_ or it _may be nothing_. You don't know what it is and you shouldn't really care. In case it is a window, you can use it as you're used to. In case it is not a window, you can still use the same functions on the instance. The caring about the existence of the variable is already taken care of.

This same concept is applicable to the `document` variable too. You can use the `exists` function in order to check if the variable exists or you are operating on an instance that contains _nothing_.

## Why use monads?

This library makes it possible to use these variables without checks with [Gatsby](https://www.gatsbyjs.org) and [NextJS](https://nextjs.org/). This way of programming splits the defensive part from your own code, since you don't have to care anymore about the environment in which you are running. This makes it especially useful with server-side rendering. More info about the `nothing`-type can be found [here](https://github.com/slmgc/Nothing).

## Example

```js
import { window, document, exists } from 'browser-monads';

// inside browser ? window.location.href : ''
window.location.href;

// inside browser ? document.getElementById("myId") : ''
document.getElementById('myId');

// inside browser ? true : false
exists(window);
```
