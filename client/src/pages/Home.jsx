import { useState, useEffect } from "react";
import axios from "axios";
import { UseGetUser } from "../hooks/UseGetUser";
import { useCookies } from "react-cookie";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [ cookies ] = useCookies(['access_token']);

  const userID = UseGetUser();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
    if (cookies.access_token) fetchSavedRecipes();
    
  }, []);

  const handleSavedRecipe = async (recipeID, userID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", { recipeID, userID }, {
        headers: {
          authorization: cookies.access_token
        }
      });
      const newSavedRecipes = response.data.savedRecipes;
      setSavedRecipes(newSavedRecipes);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center p-6 mt-8 gap-8">
      <h1 className="text-4xl font-bold font-sansita text-gray-800 mb-6">Recipes</h1>
      <div className="grid grid-cols-1 gap-8 w-full">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-start p-4 h-auto border-2 border-gray-300 gap-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.name}</h2>
              
              {(cookies.access_token) && 
              <button
                onClick={() => handleSavedRecipe(recipe._id, userID)}
                className={`"max-w-[200px] h-[45px] flex items-center justify-center px-6 py-3 font-semibold rounded-xl ${isRecipeSaved(recipe._id) ? 'bg-gray-400 text-gray-700' : 'bg-green-500 text-white shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-500'}"`}
                disabled={isRecipeSaved(recipe._id)}>
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>}
           
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-20">
              <div className="flex justify-center items-center w-full lg:w-[400px] max-w-[450px] h-[250px] overflow-hidden rounded-md mb-4 hover:scale-105 transition-all duration-500">
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

export default Home