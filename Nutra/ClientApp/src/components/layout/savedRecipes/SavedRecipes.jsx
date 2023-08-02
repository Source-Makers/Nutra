import Suggestion from "../chatArea/messageArea/listOfSuggestions/Suggestion";
export default function SavedRecipes() {
  return (
    <div className="saved-recipes-container">
      <div className="saved-recipes-header-container">
        <div className="saved-recipes-header">Saved recipes</div>
      </div>

      <div className="list-of-saved-recipes">
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Fried eggs and chicken" />
      </div>
      <div className="saved-recipes-button-container">
        <button type="button" className="delete-all-recipes-button">
          Delete all recipes
        </button>
      </div>
    </div>
  );
}
