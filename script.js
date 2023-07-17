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

  // Append the elements to the recipe item div
  recipeItem.appendChild(heading);
  recipeItem.appendChild(categoryPara);
  recipeItem.appendChild(ingredientsPara);
  recipeItem.appendChild(instructionsPara);
  recipeItem.appendChild(starButton);

  // Append the recipe item div to the recipe list container
  recipeList.appendChild(recipeItem);
}
