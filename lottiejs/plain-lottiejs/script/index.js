var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"), // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
  path: "data.json", // Required
  //   name: "Hello World", // Name for future reference. Optional.
});
console.log(bodymovin);
