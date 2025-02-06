import { useState, useEffect } from 'react';
import axios from 'axios';
import { UseGetUser } from '../hooks/UseGetUser';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = UseGetUser();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`);
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center p-6 mt-8 gap-8">
      <h1 className="text-4xl font-bold font-sansita text-gray-800 mb-6">Saved Recipes</h1>
      <div className="grid grid-cols-1 gap-8 w-full">
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-start p-4 h-auto border-2 border-gray-300 gap-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.name}</h2>
            <div className="flex justify-center items-center w-full h-[250px] overflow-hidden rounded-md mb-4 hover:scale-105 transition-all duration-500">
              <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-full object-cover rounded-md" />
            </div>
            <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4 text-gray-700 text-base leading-6 overflow-hidden">
              <p>{recipe.instructions}</p>
            </div>
            <p className="text-gray-600 text-sm">
              <span className="font-medium">Cooking Time:</span> {recipe.cookingTime} minutes
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SavedRecipes