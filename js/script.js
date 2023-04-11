// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This file contains the JS functions for index.html


// This function calculates the volume of a sphere


function volumeOfSphere () {
 // input
  const radius = parseInt(document.getElementById('radius').value)


 // process
  const volume = 4/3 * Math.PI * Math.Pow(radius, 3)


 // output
  document.getElementById('volume').innerHTML = 'The Volume of Sphere is ' + volume + ' cm³'
}
