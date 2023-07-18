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

// Get the project information element
const projectInfo = document.getElementById("project-info");

// Function to set the project information
function setProjectInfo() {
  const projectName = "Final Project Number One";
  const projectNumber = 1;

  // Set the project information text
  projectInfo.textContent = `Project: ${projectName}, Number: ${projectNumber}`;
}

// Call the function to set the project information
setProjectInfo();
