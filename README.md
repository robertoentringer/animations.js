# Web Animations API based in Animate.css

The Web Animations API lets us construct animations and control their playback with JavaScript.

Npm package : https://www.npmjs.com/package/animations.js   
Demo : https://animations.now.sh    

[![screenshot.png](screenshot.png)](https://animations.now.sh)

## Resources

Web Animations API - Web APIs | MDN  
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

Rachel Nabors - Web Animations API resources   
http://rachelnabors.com/waapi

Css tricks - CSS Animations vs Web Animations API  
https://css-tricks.com/css-animations-vs-web-animations-api/

Daniel C. Wilson - Tutorial series on the Web Animations API  
https://danielcwilson.com/tags/web-animations-api/

Animate.css by Daniel Eden  
http://daneden.github.io/animate.css

## Install

CDN : 
```htlm
<script src="https://unpkg.com/animations.js"></script>
````
NPM : 

```
$ npm install animations.js
```

## Usage

```js
import { animations } from "animations.js" // es6 module
//or 
const animations = window["animations.js"].animations // cdn

const options = {
  iterations: Infinity,
  iterationStart: 0,
  delay: 0,
  endDelay: 0,
  direction: "alternate",
  duration: 700,
  fill: "forwards",
  easing: "linear",
}

const keyframes = animations.fadeIn // animations.bounce /  animations.flash, animations.pulse, etc...

const play = document.getElementById("ElementToAnimate").animate(keyframes, options)
```

## See all available animations in : 

https://github.com/robertoentringer/animations.js/blob/master/src/animations.js
