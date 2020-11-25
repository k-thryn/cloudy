// Donut demo

const Animation = require('Animation');
const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');


// Bouncing donut.
Scene.root.findFirst('smol_donut_1')
  .then(function(base) {
    const donutDriverParameters = {
      durationMilliseconds: 300,
      loopCount: Infinity,
      mirror: true
    };


  const timeDriver = Animation.timeDriver(donutDriverParameters);
  timeDriver.start();


  const sampler = Animation.samplers.easeInQuint(0, -.05);
  const translationAnimation = Animation.animate(timeDriver, sampler);

  const baseTransform = base.transform;
  baseTransform.z = translationAnimation;
});

// Spinning donut.
Scene.root.findFirst('smol_donut_2')
  .then(function(base) {
    const donutDriverParameters = {
    durationMilliseconds: 800,
    loopCount: Infinity,
    mirror: true
  };

  const timeDriver = Animation.timeDriver(donutDriverParameters);
  timeDriver.start();


  const sampler = Animation.samplers.linear(0, 10);
  const translationAnimation = Animation.animate(timeDriver, sampler);

  const baseTransform = base.transform;
  baseTransform.rotationZ = translationAnimation;
});

// Growing donut.
Scene.root.findFirst('big_donut')
  .then(function(base) {
    const donutDriverParameters = {
    durationMilliseconds: 3000,
    loopCount: Infinity,
    mirror: true
  };

  const timeDriver = Animation.timeDriver(donutDriverParameters);
  timeDriver.start();


  const sampler = Animation.samplers.easeInOutQuad(.03, .08);
  const translationAnimation = Animation.animate(timeDriver, sampler);

  const baseTransform = base.transform;
  baseTransform.scaleX = translationAnimation;
  baseTransform.scaleY = translationAnimation;
  baseTransform.scaleZ = translationAnimation;
});