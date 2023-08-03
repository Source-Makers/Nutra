import Suggestion from "../chatArea/messageArea/listOfSuggestions/Suggestion";
export default function SavedRecipes() {
  return (
    <div className="saved-recipes-container">
      <div className="extra-container">
        <div className="saved-recipes-header">Saved recipes</div>
        <div className="list-of-saved-recipes">
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
          <Suggestion title="Fried eggs and chicken" isSaved={true} />
        </div>
      </div>

      <button type="button" className="delete-all-recipes-button">
        Delete all recipes
      </button>
    </div>
  );
}
