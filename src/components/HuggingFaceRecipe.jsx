import ReactMarkdown from "react-markdown"

const HuggingFaceRecipe = (props) => {
  return (
      <section className="suggested-recipe-container" aria-live="polite">
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
  )
}

export default HuggingFaceRecipe