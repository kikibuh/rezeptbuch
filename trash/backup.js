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

    // Check if the form is in "Add" mode or "Modify" mode
    var submitButton = document.activeElement;
    if (submitButton.textContent === "Add") {
      // Create an object to store the form data
      var formData = {
        name: recipeName,
        category: recipeCategory,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
      };

      // Display the form data in the recipe list section
      displayFormData(formData);
    } else if (submitButton.textContent === "Modify") {
      // Get the recipe item being modified
      var recipeItem = submitButton.parentNode;

      // Get the recipe details within the recipe item
      var heading = recipeItem.querySelector("h3");
      var categoryPara = recipeItem.querySelector("p:nth-child(2)");
      var ingredientsPara = recipeItem.querySelector("p:nth-child(3)");
      var instructionsPara = recipeItem.querySelector("p:nth-child(4)");

      // Update the recipe details with the new values
      heading.textContent = recipeName;
      categoryPara.textContent = "Category: " + recipeCategory;
      ingredientsPara.textContent = "Ingredients: " + recipeIngredients;
      instructionsPara.textContent = "Instructions: " + recipeInstructions;
    }

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

  // Append the elements to the recipe item div
  recipeItem.appendChild(heading);
  recipeItem.appendChild(categoryPara);
  recipeItem.appendChild(ingredientsPara);
  recipeItem.appendChild(instructionsPara);

  // Append the recipe item div to the recipe list container
  recipeList.appendChild(recipeItem);
}
