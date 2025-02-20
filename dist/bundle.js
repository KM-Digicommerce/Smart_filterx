(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  // index.js
  // Select the button by its ID
  var button = document.getElementById('changeColorBtn');

  // Function to change the background color
  function changeBackgroundColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
  }

  // Add an event listener to the button to trigger the changeBackgroundColor function when clicked
  button.addEventListener('click', changeBackgroundColor);

}));
