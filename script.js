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
    var recipeName = document.getElementById("recipe-name").value;
    var recipeCategory = document.getElementById("recipe-category").value;
    var recipeIngredients = document.getElementById("recipe-ingredients").value;
    var recipeInstructions = document.getElementById(
      "recipe-instructions"
    ).value;

    // Update the recipe item with the new values
    heading.textContent = recipeName;
    categoryPara.textContent = "Category: " + recipeCategory;
    ingredientsPara.textContent = "Ingredients: " + recipeIngredients;
    instructionsPara.textContent = "Instructions: " + recipeInstructions;
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

// Get the button element
const randomRecipeButton = document.getElementById("random-recipe-button");

// Get the pop-up container
const recipePopup = document.getElementById("recipe-popup");

// Get the close button element
const closeButton = document.querySelector(".close-button");

// Add a click event listener to the button
randomRecipeButton.addEventListener("click", getRandomRecipe);

// Function to handle the button click event
async function getRandomRecipe() {
  const url =
    "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=ice%20cream";
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
  // Or use classList.remove() if you're using the class approach
});

// Open the project info pop-up
document
  .getElementById("project-info-button")
  .addEventListener("click", openInfoPopup);

// Close the project info pop-up
document
  .getElementById("close-button")
  .addEventListener("click", closeInfoPopup);

// Function to open the project info pop-up
function openInfoPopup() {
  const projectInfo = "This is my project information.";
  const popupContent = document.getElementById("project-info-content");

  // Update the content of the pop-up window
  popupContent.textContent = projectInfo;

  // Open the pop-up window with a transition
  const popup = document.getElementById("project-info-popup");
  popup.classList.add("open");
}

// Function to close the project info pop-up
function closeInfoPopup() {
  // Close the pop-up window with a transition
  const popup = document.getElementById("project-info-popup");
  popup.classList.remove("open");
}
