var Container = document.getElementById('Container');
var animation = lottie.loadAnimation({
  container: document.getElementById('container'), // Required
  wrapper: Container,
  renderer: 'svg', // Required
  controls: true,
  loop: true, // Optional
  autoplay: true, // Optional
  path: 'fragen05.json', // Required
})