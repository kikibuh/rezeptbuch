// Add event listener to the form submission
document
  .getElementById("recipe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var recipeName = document.getElementById("recipe-name").value;
    var recipeCategory = document.getElementById("recipe-category").value;
    var recipeIngredients = document.getElementById("recipe-ingredients").value;
    var recipeInstructions = document.getElementById(
      "recipe-instructions"
    ).value;

    // Create an object to store the form data
    var formData = {
      name: recipeName,
      category: recipeCategory,
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
    };

    // Call the displayFormData function to show the recipe item
    displayFormData(formData);

    // Clear the form inputs
    document.getElementById("recipe-name").value = "";
    document.getElementById("recipe-category").value = "";
    document.getElementById("recipe-ingredients").value = "";
    document.getElementById("recipe-instructions").value = "";
  });

// Function to display the recipe item
function displayFormData(formData) {
  var recipeList = document.getElementById("recipes-container");

  // Create a new div for the recipe item
  var recipeItem = document.createElement("div");
  recipeItem.classList.add("recipe-item");

  // Create heading for the recipe name
  var heading = document.createElement("h3");
  heading.textContent = formData.name;

  // Create paragraph for category, ingredients, and instructions
  var categoryPara = document.createElement("p");
  categoryPara.textContent = "Category: " + formData.category;

  var ingredientsPara = document.createElement("p");
  ingredientsPara.textContent = "Ingredients: " + formData.ingredients;

  var instructionsPara = document.createElement("p");
  instructionsPara.textContent = "Instructions: " + formData.instructions;

  // Create star button
  var starButton = document.createElement("button");
  starButton.classList.add("star-button");
  starButton.textContent = "☆"; // Add the star symbol

  // Add event listener to the star button
  starButton.addEventListener("click", function () {
    // Toggle the "favorite" class when clicked
    recipeItem.classList.toggle("favorite");
  });

  // Create delete button
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  // Add event listener to the delete button
  deleteButton.addEventListener("click", function () {
    // Remove the recipe item from the DOM
    recipeList.removeChild(recipeItem);
  });

  // Create modify button
  var modifyButton = document.createElement("button");
  modifyButton.classList.add("update-button");
  modifyButton.textContent = "Update";

  // Add event listener to the modify button
  modifyButton.addEventListener("click", function () {
    // Get the form inputs

    // Add event listener to the modify button
    modifyButton.addEventListener("click", function () {
      // Get the form inputs for the updated values
      var newRecipeName = document.getElementById("recipe-name").value;
      var newRecipeCategory = document.getElementById("recipe-category").value;
      var newRecipeIngredients =
        document.getElementById("recipe-ingredients").value;
      var newRecipeInstructions = document.getElementById(
        "recipe-instructions"
      ).value;

      // Update the recipe item with the new values
      formData.name = newRecipeName;
      formData.category = newRecipeCategory;
      formData.ingredients = newRecipeIngredients;
      formData.instructions = newRecipeInstructions;

      heading.textContent = formData.name;
      categoryPara.textContent = "Category: " + formData.category;
      ingredientsPara.textContent = "Ingredients: " + formData.ingredients;
      instructionsPara.textContent = "Instructions: " + formData.instructions;
    });

    // ...
  });

  // Append the elements to the recipe item div
  recipeItem.appendChild(heading);
  recipeItem.appendChild(categoryPara);
  recipeItem.appendChild(ingredientsPara);
  recipeItem.appendChild(instructionsPara);
  recipeItem.appendChild(starButton);
  recipeItem.appendChild(deleteButton);
  recipeItem.appendChild(modifyButton);

  // Append the recipe item div to the recipe list container
  recipeList.appendChild(recipeItem);
}

const randomRecipeButton = document.getElementById("random-recipe-button");

// Get the pop-up container
const recipePopup = document.getElementById("recipe-popup");

// Get the close button element
const closeButton = document.querySelector(".close-button");

// Add a click event listener to the button
randomRecipeButton.addEventListener("click", getRandomRecipe);

// Function to handle the button click event
async function getRandomRecipe() {
  const dishes = [
    "pizza",
    "burger",
    "pasta",
    "sushi",
    "cake",
    "ice cream",
    "steak",
    "fried rice",
    "chicken curry",
    "tacos",
    "pancakes",
    "lasagna",
  ];

  // Get a random index to select a dish from the list
  const randomIndex = Math.floor(Math.random() * dishes.length);
  const choice = encodeURIComponent(dishes[randomIndex]);

  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${choice}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fef0a72115msh4e8ca847f9e3bd5p122601jsn9b9d5452bfe0",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const recipe = result[0];

    // Display the randomly selected recipe in the pop-up
    document.getElementById("popup-recipe-title").textContent = recipe.title;
    document.getElementById("popup-recipe-ingredients").textContent =
      "Ingredients: " + recipe.ingredients;
    document.getElementById("popup-recipe-servings").textContent =
      "Servings: " + recipe.servings;
    document.getElementById("popup-recipe-instructions").textContent =
      "Instructions: " + recipe.instructions;

    // Show the pop-up
    recipePopup.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// Close the pop-up when the close button is clicked
closeButton.addEventListener("click", () => {
  recipePopup.style.display = "none";
});

// Open the project info pop-up
// Variablen zur Verfolgung der Projektbeschreibung und des aktuellen Index
let projectDescriptions = [
  " 1. 🦄 Das Projekt verwendet Vanilla JavaScript, um die Abhängigkeit von Frameworks oder Bibliotheken zu minimieren und die Performance zu optimieren  ",
  " 🦄 Das Projekt ist komplett front-endbasiert, was bedeutet, dass alle Aktionen und Inhalte direkt im Browser des Benutzers stattfinden ",
  " 🦄 Das Projekt demonstriert die Verwendung von DOM-Manipulation, Event Listenern und Fetch-API, um eine interaktive und dynamische Benutzeroberfläche zu erstellen.  ",
  "🤌 DOM ist eine Schnittstelle, die es JavaScript ermöglicht, auf den strukturierten Inhalt einer Webseite zuzugreifen und ihn zu ändern. ",
  " FEATURES ➡️",

  "Anzeigen von Rezepten mit Name, Kategorie, Zutaten und Anweisungen 🆒",
  "Hinzufügen, Bearbeiten und Löschen von Rezepten ohne Neuladen der Seite 😀",
  "Zufällige Rezeptanzeige über eine externe API ⛏️",
  " FUNKTIONEN ➡️ und TECHINFOS 👁️‍🗨️ ",
  "🦻 Event Listener für das Formular implemintiert, um die Eingaben der Benutzer zu erfassen und zu verarbeiten.",
  " 👨‍🚀function (displayFormData) erstellt ein neues Rezeptelement im DOM und fügt es der Rezeptliste hinzu. Dabei werden die Informationen aus dem übergebenen Formulardaten-Objekt in die entsprechenden HTML-Elemente eingefügt.",
  " 🥷 function (getRandomRecipe) ist verantwortlich für das Abrufen eines zufälligen Rezepts von einer externen API und Anzeigen der Daten in einem Pop-up-Fenster, wenn der 'Zufälliges Rezept'-Button geklickt wird.",
  " 👨‍🚀 Funktionen (openInfoPopup) und (closeInfoPopup) öffnen bzw. schließen das Pop-up-Fenster mit den Projektinformationen.",
  " ich bin in der Cloud ☁️",
  " like me ?  😎 Feed me // contact me ✉️ nick.jabs@docc.techstarter.de ",
];

let currentIndex = 0;

// Open the project info pop-up
document
  .getElementById("project-info-button")
  .addEventListener("click", openInfoPopup);

// Close the project info pop-up
document
  .getElementById("close-button")
  .addEventListener("click", closeInfoPopup);

// Next button click event
document
  .getElementById("next-button")
  .addEventListener("click", showNextDescription);

// back button click event
document
  .getElementById("back-button")
  .addEventListener("click", showPrevDescription);

// Function to open the project info pop-up
function openInfoPopup() {
  const popupContent = document.getElementById("project-info-content");
  popupContent.textContent = projectDescriptions[currentIndex]; // Set current description
  const popup = document.getElementById("project-info-popup");
  popup.classList.add("open");
}

// Function to close the project info pop-up
function closeInfoPopup() {
  const popup = document.getElementById("project-info-popup");
  popup.classList.remove("open");
}

// Function to show the next project description
function showNextDescription() {
  currentIndex++;
  if (currentIndex >= projectDescriptions.length) {
    currentIndex = 0; // Loop back to the beginning if reached the end
  }
  const popupContent = document.getElementById("project-info-content");
  popupContent.textContent = projectDescriptions[currentIndex]; // Set the next description
}

// Function to show the previous project description
function showPrevDescription() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = projectDescriptions.length - 1; // Loop back to the last description if reached the beginning
  }
  const popupContent = document.getElementById("project-info-content");
  popupContent.textContent = projectDescriptions[currentIndex]; // Set the previous description
}
