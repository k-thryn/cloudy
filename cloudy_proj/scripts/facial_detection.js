// Facial detection script.

const Animation = require('Animation');
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');
const FaceGestures = require('FaceGestures');
const Materials = require('Materials');
const Scene = require ('Scene');

const FOG_MATERIAL_NAME = 'smoke?';
const FOG_MAX_OPACITY = .1; // opacity = [0, 1]

// Animation params for the full sequence
const ANIMATION_PARAMS = { 
  durationMilliseconds: 3500,
  loopCount: 1,
  mirror: false
};

// Change the opacity of the vapor clouds based on mouth openness
Materials.findFirst(FOG_MATERIAL_NAME)
.then(function(smoke) {
  const face = FaceTracking.face(0);

  // Create a sequenced animation for bringing the fog in and out
  const fogIn = Animation.samplers.linear(0, FOG_MAX_OPACITY);
  const fogOut = Animation.samplers.linear(FOG_MAX_OPACITY, 0);
  const fogInOut = Animation.samplers.sequence({samplers: [fogIn, fogOut]});

  // Set event listener for mouth opening to create and fire animation.
  const hasMouthOpen = FaceGestures.hasMouthOpen(face);
  hasMouthOpen.monitor().subscribe(function(event) {
    if (!!event['newValue']) {
      timeDriver = Animation.timeDriver(ANIMATION_PARAMS);
      const opacityAnimation = Animation.animate(timeDriver, fogInOut);
      smoke.opacity = opacityAnimation;
      timeDriver.start();
    }
  });
});








