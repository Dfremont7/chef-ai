import { useState, useEffect, useRef } from "react"
import { getRecipeFromMistral } from "../../api/recipe.js"

import IngredientsList from "./IngredientsList"
import HuggingFaceRecipe from "./HuggingFaceRecipe"
import Spinner from "./Spinner"

const Main = () => {
    const [ingredients, setIngredients] = useState(['fish', 'salmon', 'spinach', 'tomatoes', 'onions', 'garlic'])
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const recipeSection = useRef(null)
    
    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    const getRecipe = async () => {
        setLoading(true)
        setError(null)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            setRecipe(recipeMarkdown)
        } catch (err) {
            console.error(err.message)
            setError("Une erreur est survenue lors de la génération de la recette. Veuillez réessayer.")
        } finally {
            setLoading(false)
        }
    }

    const addIngredient = async (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

//    const removeIngredient = (ingredient) => {
  //      setIngredients(prevIngredients => prevIngredients.filter(prevIngredients => prevIngredients !== ingredient))
   // }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>

            {loading && <Spinner loading={loading} />}

            
            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {error && <p className="error-message">{error}</p>}

            {recipe && <HuggingFaceRecipe recipe={recipe} />}
        </main>
    )
}

export default Main