// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This file contains the JS functions for index.html

// This function calculates the volume of a sphere

function volumeOfSphere() {
 // input
  const radius = parseInt(document.getElementById('radius').value)

 // process
 const volume = (4 / 3) * Math.PI * radius ** 3

 // output
  document.getElementById('volume').innerHTML = `The volume is: $ ${volume.toFixed(2)}` + ' cm³'
}
