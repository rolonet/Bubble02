var container = document.getElementById('container');
var animation = lottie.loadAnimation({
  container: document.getElementById('container'), // Required
  wrapper: container,
  renderer: 'svg', // Required
  controls: true,
  loop: true, // Optional
  autoplay: true, // Optional
  path: 'verlaufskurve09.json', // Required
})