const receipeListElement = document.querySelector(".receipe__list");

let receipeMeals = [];

const fetchReceipeMeals = async () => {
  const response = await fetch("./db.json");
  if (response.status === 200 && response.ok) {
    const data = await response.json();
    receipeMeals = data.map((meal, idx) => {
      return {
        id: idx,
        imgUrl: meal.image,
        title: meal.title,
        sourceUrl: meal.sourceUrl,
        instructions: meal.instructions,
      };
    });
    addRecipes(receipeMeals);
  }
};

function addRecipes(recipes) {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = `
        <div class="receipe">
            <img src=${recipes[i].imgUrl} alt=${recipes[i].title}>
            <h4>${recipes[i].title}</h4>
            <div class="receipe__instructions">
                <strong>Instructions:</strong>
                <p>${recipes[i].instructions
                  .replace(/(<([^>]+)>)/gi, "")
                  .slice(0, 260)}...</p>
            </div>
            <a href=${recipes[i].sourceUrl} target="_blank">View Receipe</a>
        </div>
    `;
    receipeListElement.insertAdjacentHTML("afterbegin", recipe);
  }
}

fetchReceipeMeals();
