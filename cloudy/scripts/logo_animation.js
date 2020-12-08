// Cloudy logo animation script.

const Animation = require('Animation');
const Scene = require('Scene');

const CLOUDY_LOGO_NAME = 'cloudy_logo';

const ROTATION_X_START = 3.5;
const ROTATION_X_END = 3;
const ROTATION_Y_START = 3;
const ROTATION_Y_END = 3.7;

const ANIMATION_PARAMS = {
  durationMilliseconds: 3000,
  loopCount: Infinity,
  mirror: true
};

Scene.root.findFirst(CLOUDY_LOGO_NAME)
.then(function(cloudyLogo) {
  const timeDriver = Animation.timeDriver(ANIMATION_PARAMS);
  timeDriver.start();

  const rotationXSampler = Animation.samplers.linear(ROTATION_X_START, ROTATION_X_END);
  const rotationYSampler = Animation.samplers.linear(ROTATION_Y_START, ROTATION_Y_END);

  const cloudyLogoTransform = cloudyLogo.transform;
  cloudyLogoTransform.rotationX = Animation.animate(timeDriver, rotationXSampler);
  cloudyLogoTransform.rotationY = Animation.animate(timeDriver, rotationYSampler);
});