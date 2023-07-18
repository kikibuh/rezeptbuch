14.07 --->
 my .js Boilerplate Logic

function saveForm() {
  // Get form inputs
  // Create an object to store the form data
  // Display the form data in the recipe list section
  // Clear the form inputs
  // Return false to prevent the form from submitting in the traditional way
}

function displayFormData(formData) {
  // Get the recipe list element
  // Create a new list item for the form data
  // Set the text content of the list item
  // Append the new list item to the recipe list
}


17.07- -- >


In der HTML-Formulareingabe werden die Daten in einem Container
mit der ID "recipes-container" gespeichert.

Dann wird mit var recipeList = document.getElementById("recipes-container");
eine Referenz auf diesen Container geholt und in der Variable recipeList gespeichert.

Für jeden Eintrag bzw. jedes Rezept wird ein neues <div>-Element erstellt,
das mit var recipeItem = document.createElement("div"); erzeugt wird.
Dieses recipeItem-Element dient als Container für die einzelnen Elemente,
die das Rezept repräsentieren.

Durch die Schleife wird dieser Vorgang für jedes Rezept wiederholt,
sodass für jeden Eintrag ein eigenes recipeItem-Element erstellt wird,
das die Informationen des Rezepts enthält.

18.07 --->

const randomIndex = Math.floor(Math.random()*dishes.length)
const choice = encodeURIComponent(dishes[randomIndex])
fetch(`https:...?query=${choie})

GET INFO Pop UP ! --->

added a div element with the id "project-info-popup" to represent the pop-up window.
 Initially, it is hidden (display: none;).
 The CSS code includes styles to position the pop-up window in the center of the screen
using position: fixed;
 and transform: translate(-50%, -50%);. The transition effect is achieved using the
  opacity property and the transition property.

The JavaScript code has been updated to open and close the pop-up window with transitions.
When the "Get Info!" button is clicked, the openInfoPopup function is executed.
It updates the content of the pop-up window and adds the "open" class to the
project-info-popup element,
triggering the transition effect and making the pop-up window visible.

The "Close" button has been added, and when it is clicked,
the closeInfoPopup function is executed. It removes the "open"
class from the project-info-popup element,
triggering the transition effect and hiding the pop-up window.

You can further customize the CSS styles and transitions to match your desired design
and transition effects.

  <----GET INFO Pop UP !