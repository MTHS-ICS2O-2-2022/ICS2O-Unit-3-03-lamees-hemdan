// Created By: Lamees Hemdan
// Created On: April 2023
//
// This file contains the main function for the go_app application.

package main

import (
	"fmt"
	"math"
)

func main() {
	var radius float64

	// input
	fmt.Println("Enter the radius of the sphere: ")
	fmt.Scan(&radius)
	// process
	volume := (4.0 / 3) * math.Pi * math.Pow(radius, 3)
	roundVolume := fmt.Sprintf("%.2f", volume)

	// output
	fmt.Println("The volume of sphere is: " + roundVolume)

	fmt.Println("\nDone.")
}
