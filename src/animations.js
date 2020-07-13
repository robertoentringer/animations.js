const groups = {
  attention_seekers: [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat'
  ],
  bouncing_entrances: ['bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight'],
  bouncing_exits: ['bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 'bounceOutRight'],
  fading_entrances: [
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig'
  ],
  fading_exits: [
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig'
  ],
  flippers: ['flip', 'flipInX', 'flipOutX', 'flipInY', 'flipOutY'],
  lightspeed: ['lightSpeedIn', 'lightSpeedOut'],
  rotating_entrances: [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight'
  ],
  rotating_exits: [
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight'
  ],
  specials: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
  zooming_entrances: ['zoomIn', 'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight'],
  zooming_exits: ['zoomOut', 'zoomOutDown', 'zoomOutUp', 'zoomOutLeft', 'zoomOutRight'],
  sliding_entrances: ['slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight'],
  sliding_exits: ['slideOutDown', 'slideOutUp', 'slideOutLeft', 'slideOutRight']
}

const animations = {
  bounce: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center bottom',
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center bottom',
      offset: 0.2
    },
    {
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -30px, 0)',
      transformOrigin: 'center bottom',
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -30px, 0)',
      transformOrigin: 'center bottom',
      offset: 0.43
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center bottom',
      offset: 0.53
    },
    {
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -15px, 0)',
      transformOrigin: 'center bottom',
      offset: 0.7
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center bottom',
      offset: 0.8
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, -4px, 0)',
      transformOrigin: 'center bottom',
      offset: 0.9
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center bottom',
      offset: 1
    }
  ],
  flash: [
    { easing: 'ease', opacity: 1, offset: 0 },
    { easing: 'ease', opacity: 0, offset: 0.25 },
    { easing: 'ease', opacity: 1, offset: 0.5 },
    { easing: 'ease', opacity: 0, offset: 0.75 },
    { easing: 'ease', opacity: 1, offset: 1 }
  ],
  headShake: [
    {
      easing: 'ease-in-out',
      transform: 'translateX(0)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(-6px) rotateY(-9deg)',
      transformOrigin: 'center',
      offset: 0.065
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(5px) rotateY(7deg)',
      transformOrigin: 'center',
      offset: 0.185
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(-3px) rotateY(-5deg)',
      transformOrigin: 'center',
      offset: 0.315
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(2px) rotateY(3deg)',
      transformOrigin: 'center',
      offset: 0.435
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(0)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease-in-out',
      transform: 'translateX(0)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  heartBeat: [
    {
      easing: 'ease-in-out',
      transform: 'scale(1)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease-in-out',
      transform: 'scale(1.3)',
      transformOrigin: 'center',
      offset: 0.14
    },
    {
      easing: 'ease-in-out',
      transform: 'scale(1)',
      transformOrigin: 'center',
      offset: 0.28
    },
    {
      easing: 'ease-in-out',
      transform: 'scale(1.3)',
      transformOrigin: 'center',
      offset: 0.42
    },
    {
      easing: 'ease-in-out',
      transform: 'scale(1)',
      transformOrigin: 'center',
      offset: 0.7
    },
    {
      easing: 'ease-in-out',
      transform: 'scale(1)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  jello: [
    {
      easing: 'ease',
      transform: 'skewX(0deg) skewY(0deg)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'skewX(0deg) skewY(0deg)',
      transformOrigin: 'center',
      offset: 0.111
    },
    {
      easing: 'ease',
      transform: 'skewX(-12.5deg) skewY(-12.5deg)',
      transformOrigin: 'center',
      offset: 0.222
    },
    {
      easing: 'ease',
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      transformOrigin: 'center',
      offset: 0.333
    },
    {
      easing: 'ease',
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      transformOrigin: 'center',
      offset: 0.444
    },
    {
      easing: 'ease',
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      transformOrigin: 'center',
      offset: 0.555
    },
    {
      easing: 'ease',
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      transformOrigin: 'center',
      offset: 0.666
    },
    {
      easing: 'ease',
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      transformOrigin: 'center',
      offset: 0.777
    },
    {
      easing: 'ease',
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      transformOrigin: 'center',
      offset: 0.888
    },
    {
      easing: 'ease',
      transform: 'skewX(0deg) skewY(0deg)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  pulse: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.05, 1.05, 1.05)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  rubberBand: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.25, 0.75, 1)',
      transformOrigin: 'center',
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.75, 1.25, 1)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.15, 0.85, 1)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.95, 1.05, 1)',
      transformOrigin: 'center',
      offset: 0.65
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.05, 0.95, 1)',
      transformOrigin: 'center',
      offset: 0.75
    },
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  shake: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.1
    },
    {
      easing: 'ease',
      transform: 'translate3d(10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'translate3d(10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'translate3d(10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.7
    },
    {
      easing: 'ease',
      transform: 'translate3d(10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  swing: [
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'top center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, 15deg)',
      transformOrigin: 'top center',
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, -10deg)',
      transformOrigin: 'top center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, 5deg)',
      transformOrigin: 'top center',
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, -5deg)',
      transformOrigin: 'top center',
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'top center',
      offset: 1
    }
  ],
  tada: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.1
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      transformOrigin: 'center',
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      transformOrigin: 'center',
      offset: 0.7
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)  rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  wobble: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
      transformOrigin: 'center',
      offset: 0.15
    },
    {
      easing: 'ease',
      transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
      transformOrigin: 'center',
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
      transformOrigin: 'center',
      offset: 0.45
    },
    {
      easing: 'ease',
      transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
      transformOrigin: 'center',
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
      transformOrigin: 'center',
      offset: 0.75
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)  rotate3d(0, 0, 1, 0deg)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  bounceIn: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(0.3, 0.3, 0.3)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(1.1, 1.1, 1.1)',
      transformOrigin: 'center',
      offset: 0.2
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(0.9, 0.9, 0.9)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(1.03, 1.03, 1.03)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(0.97, 0.97, 0.97)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  bounceInDown: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, -800px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 25px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, -10px, 0)',
      transformOrigin: 'center',
      offset: 0.7
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 5px, 0)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  bounceInLeft: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(-800px, 0, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(25px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(-10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.75
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(5px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  bounceInRight: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(800px, 0, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(-25px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(10px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.75
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(-5px, 0, 0)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  bounceInUp: [
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 800px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, -20px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 10px, 0)',
      transformOrigin: 'center',
      offset: 0.75
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, -5px, 0)',
      transformOrigin: 'center',
      offset: 0.9
    },
    {
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  bounceOut: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.9, 0.9, 0.9)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'scale3d(1.1, 1.1, 1.1)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.55
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.3, 0.3, 0.3)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  bounceOutDown: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 10px, 0)',
      transformOrigin: 'center',
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, -20px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, -20px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.45
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 800px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  bounceOutLeft: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(20px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'translate3d(-800px, 0, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  bounceOutRight: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(-20px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'translate3d(800px, 0, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  bounceOutUp: [
    {
      easing: 'ease',
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, -10px, 0)',
      transformOrigin: 'center',
      offset: 0.2
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 20px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, 20px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.45
    },
    {
      easing: 'ease',
      transform: 'translate3d(0, -800px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  fadeIn: { easing: 'ease', opacity: [0, 1] },
  fadeInDown: {
    easing: 'ease',
    transform: ['translate3d(0, -100%, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInDownBig: {
    easing: 'ease',
    transform: ['translate3d(0, -800px, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInLeft: {
    easing: 'ease',
    transform: ['translate3d(-100%, 0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInLeftBig: {
    easing: 'ease',
    transform: ['translate3d(-800px, 0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInRight: {
    easing: 'ease',
    transform: ['translate3d(100%, 0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInRightBig: {
    easing: 'ease',
    transform: ['translate3d(800px, 0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInUp: {
    easing: 'ease',
    transform: ['translate3d(0, 100%, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeInUpBig: {
    easing: 'ease',
    transform: ['translate3d(0, 800px, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  fadeOut: { easing: 'ease', opacity: [1, 0] },
  fadeOutDown: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, 100%, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutDownBig: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, 800px, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutLeft: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(-100%, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutLeftBig: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(-800px, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutRight: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(100%, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutRightBig: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(800px, 0, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutUp: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, -100%, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  fadeOutUpBig: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, -800px, 0)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  flip: [
    {
      easing: 'ease-out',
      transform:
        'perspective(600px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
      transformOrigin: 'center',
      offset: 0
    },
    {
      easing: 'ease-out',
      transform:
        'perspective(600px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease-in',
      transform:
        'perspective(600px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease-in',
      transform:
        'perspective(600px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease-in',
      transform: 'perspective(600px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      transformOrigin: 'center',
      offset: 1
    }
  ],
  flipInX: [
    {
      easing: 'ease-in',
      transform: 'perspective(600px) rotate3d(1, 0, 0, 90deg)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'ease-in',
      transform: 'perspective(600px) rotate3d(1, 0, 0, -20deg)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, 10deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, -5deg)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, 0deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  flipInY: [
    {
      easing: 'ease-in',
      transform: 'perspective(600px) rotate3d(0, 1, 0, 90deg)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'ease-in',
      transform: 'perspective(600px) rotate3d(0, 1, 0, -20deg)',
      transformOrigin: 'center',
      offset: 0.4
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, 10deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, -5deg)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, 0deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  flipOutX: [
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, 0deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, -20deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(1, 0, 0, 90deg)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  flipOutY: [
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, 0deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, -15deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.3
    },
    {
      easing: 'ease',
      transform: 'perspective(600px) rotate3d(0, 1, 0, 90deg)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 1
    }
  ],
  lightSpeedIn: [
    {
      easing: 'ease-out',
      transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'ease-out',
      transform: 'translate3d(0, 0, 0) skewX(20deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'ease-out',
      transform: 'translate3d(0, 0, 0) skewX(-5deg)',
      transformOrigin: 'center',
      offset: 0.8
    },
    {
      easing: 'ease-out',
      transform: 'translate3d(0, 0, 0) skewX(0deg)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  lightSpeedOut: {
    easing: 'ease-in',
    transform: ['translate3d(0, 0, 0) skewX(0deg)', 'translate3d(100%, 0, 0) skewX(30deg)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  rotateIn: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 180deg) ', 'rotate3d(0, 0, 1, 0deg)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  rotateInDownLeft: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, -45deg)', 'rotate3d(0, 0, 1, 0deg)'],
    transformOrigin: ['left bottom', 'left bottom'],
    opacity: [0, 1]
  },
  rotateInDownRight: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 45deg)', 'rotate3d(0, 0, 1, 0deg)'],
    transformOrigin: ['right bottom', 'right bottom'],
    opacity: [0, 1]
  },
  rotateInUpLeft: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 45deg)', 'rotate3d(0, 0, 1, 0deg)'],
    transformOrigin: ['left bottom', 'left bottom'],
    opacity: [0, 1]
  },
  rotateInUpRight: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, -45deg)', 'rotate3d(0, 0, 1, 0deg)'],
    transformOrigin: ['right bottom', 'right bottom'],
    opacity: [0, 1]
  },
  rotateOut: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, 180deg)'],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  rotateOutDownLeft: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, 45deg)'],
    transformOrigin: ['left bottom', 'left bottom'],
    opacity: [1, 0]
  },
  rotateOutDownRight: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, -45deg)'],
    transformOrigin: ['right bottom', 'right bottom'],
    opacity: [1, 0]
  },
  rotateOutUpLeft: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, -45deg)'],
    transformOrigin: ['left bottom', 'left bottom'],
    opacity: [1, 0]
  },
  rotateOutUpRight: {
    easing: 'ease',
    transform: ['rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, 45deg)'],
    transformOrigin: ['right bottom', 'right bottom'],
    opacity: [1, 0]
  },
  slideInDown: {
    easing: 'ease',
    transform: ['translate3d(0, -100%, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center']
  },
  slideInLeft: {
    easing: 'ease',
    transform: ['translate3d(-100%,0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center']
  },
  slideInRight: {
    easing: 'ease',
    transform: ['translate3d(100%,0, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center']
  },
  slideInUp: {
    easing: 'ease',
    transform: ['translate3d(0, 100%, 0)', 'translate3d(0, 0, 0)'],
    transformOrigin: ['center', 'center']
  },
  slideOutDown: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, 100%, 0)'],
    transformOrigin: ['center', 'center'],
    visibility: ['visible', 'hidden']
  },
  slideOutLeft: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(-100%, 0, 0)'],
    transformOrigin: ['center', 'center'],
    visibility: ['visible', 'hidden']
  },
  slideOutRight: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(100%, 0, 0)'],
    transformOrigin: ['center', 'center'],
    visibility: ['visible', 'hidden']
  },
  slideOutUp: {
    easing: 'ease',
    transform: ['translate3d(0, 0, 0)', 'translate3d(0, -100%, 0)'],
    transformOrigin: ['center', 'center'],
    visibility: ['visible', 'hidden']
  },
  hinge: [
    {
      easing: 'ease-in-out',
      transform: 'rotate3d(0, 0, 0, 0deg) translate3d(0, 0, 0)',
      transformOrigin: 'top left',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 80deg)',
      transformOrigin: 'top left',
      offset: 0.2
    },
    {
      easing: 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 60deg)',
      transformOrigin: 'top left',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 80deg)',
      transformOrigin: 'top left',
      offset: 0.6
    },
    {
      easing: 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 60deg)',
      transformOrigin: 'top left',
      opacity: 1,
      offset: 0.8
    },
    {
      easing: 'ease',
      transform: 'rotate3d(0, 0, 0, 0deg) translate3d(0, 700px, 0)',
      transformOrigin: 'center center',
      opacity: 0,
      offset: 1
    }
  ],
  jackInTheBox: [
    {
      easing: 'ease',
      transform: 'scale(0.1) rotate(30deg)',
      transformOrigin: 'center bottom',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'rotate(-10deg)',
      transformOrigin: 'center',
      offset: 0.5
    },
    {
      easing: 'ease',
      transform: 'rotate(3deg)',
      transformOrigin: 'center',
      offset: 0.7
    },
    {
      easing: 'ease',
      transform: 'scale(1) rotate(0deg)',
      transformOrigin: 'center bottom',
      opacity: 1,
      offset: 1
    }
  ],
  rollIn: {
    easing: 'ease',
    transform: [
      'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
      'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)'
    ],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  rollOut: {
    easing: 'ease',
    transform: [
      'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
      'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)'
    ],
    transformOrigin: ['center', 'center'],
    opacity: [1, 0]
  },
  zoomIn: {
    easing: 'ease',
    transform: ['scale3d(0.3, 0.3, 0.3)', 'scale3d(1, 1, 1)'],
    transformOrigin: ['center', 'center'],
    opacity: [0, 1]
  },
  zoomInDown: [
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  zoomInLeft: [
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
      transformOrigin: 'left',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
      transformOrigin: 'right',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'right',
      opacity: 1,
      offset: 1
    }
  ],
  zoomInRight: [
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
      transformOrigin: 'right',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
      transformOrigin: 'left',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'left',
      opacity: 1,
      offset: 1
    }
  ],
  zoomInUp: [
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
      transformOrigin: 'center',
      opacity: 0,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.6
    },
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 1
    }
  ],
  ///
  ///
  zoomOut: {
    easing: 'ease',
    transform: ['scale3d(1, 1, 1)', 'scale3d(0.3, 0.3, 0.3)', 'scale3d(0, 0, 0)'],
    transformOrigin: ['center', 'center', 'center'],
    opacity: [1, 0, 0]
  },
  zoomOutDown: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      transformOrigin: 'center bottom',
      opacity: 0,
      offset: 1
    }
  ],
  zoomOutLeft: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'right',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)',
      transformOrigin: 'left center',
      opacity: 0,
      offset: 1
    }
  ],
  zoomOutRight: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'left',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'ease',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)',
      transformOrigin: 'right center',
      opacity: 0,
      offset: 1
    }
  ],
  zoomOutUp: [
    {
      easing: 'ease',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0
    },
    {
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      transformOrigin: 'center',
      opacity: 1,
      offset: 0.4
    },
    {
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      transformOrigin: 'center bottom',
      opacity: 0,
      offset: 1
    }
  ]
}

export { groups, animations }
