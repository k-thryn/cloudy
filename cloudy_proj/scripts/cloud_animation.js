// Cloudy clouds animation script.

const Animation = require('Animation');
const Scene = require('Scene');

// Params for all cloud animations.
const ANIMATION_PARAMS = {
  durationMilliseconds: 7000,
  loopCount: Infinity,
  mirror: true
};

// Top right cloud.
animateCloud('cloud1', 0.2, 0.1);

// Top left cloud.
animateCloud('cloud2', 1.1, 1.2);

// Bottom left cloud.
animateCloud('cloud3', 0.01, 0);

function animateCloud(name, xStart, xEnd) {
  Scene.root.findFirst(name)
  .then(function(cloud) {

    const timeDriver = Animation.timeDriver(ANIMATION_PARAMS);
    timeDriver.start();

    const posSampler = Animation.samplers.linear(xStart, xEnd);

    const cloudTransform = cloud.transform;
    cloudTransform.x = Animation.animate(timeDriver, posSampler);
  });
}