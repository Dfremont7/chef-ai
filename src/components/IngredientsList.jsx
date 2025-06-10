const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map(ingredient => (
      <li className="ingredients-list-item" key={ingredient}>{ingredient}</li>
  ))
  return (
      <section ref={props.ref}>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
          {props.ingredients.length > 3 && 
            <div className="get-recipe-container">
              <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button className="recipe-button" onClick={props.getRecipe}>Get a recipe</button>
          </div>}
      </section>
  )
}

export default IngredientsList