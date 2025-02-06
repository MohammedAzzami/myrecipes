import { useState } from "react";
import axios from "axios";
import { UseGetUser } from "../hooks/UseGetUser";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const CreateRecipe = () => {
  const userID = UseGetUser();
  const navigate = useNavigate();
  const [ cookies ] = useCookies(['access_token']);

 const [recipe, setRecipe ] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
 });

 const [ errorMessage, setErrorMessage ] = useState("");
 const [ successMessage, setSuccessMessage ] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({...recipe, [name]: value});
  };

  const handleIngredientChange = (event, index) => {
    const inputValue = event.target.value;
    const ingredients = recipe.ingredients;
    ingredients[index] = inputValue;
    setRecipe({...recipe, ingredients });
  };
  
  const addIngredient = (event) => {
    event.preventDefault();
    setRecipe({
      ...recipe, ingredients: [...recipe.ingredients, ""]
    });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!userID) {
      setErrorMessage("Please login to create a recipe");
      
      return;
    };

    if (!recipe.name || !recipe.ingredients.length || !recipe.instructions || !recipe.imageUrl || !recipe.cookingTime) {
      setErrorMessage("Please fill in all the fields before creating a recipe!!");
      return;
    };

    try {
      await axios.post("http://localhost:3001/recipes", recipe, {headers: {authorization: cookies.access_token}});
      setSuccessMessage("Recipe created successfully");
      setRecipe({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-white shadow-lg flex flex-col gap-10 justify-center items-center mt-10">
      <h1 className="text-4xl font-bold text-gray-800 font-sansita">Create Recipe</h1>
      <form onSubmit={onSubmit} className="flex flex-col w-full gap-4 border-2 p-10 rounded-md bg-gray-100">
        <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} className="max-w-[800px] border-2 border-gray-300 rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label htmlFor="ingredients" className="text-lg font-medium text-gray-700 mb-2">ingredients:</label>
        {recipe.ingredients.map((ingredient, index) =>(
          <input key={index} type="text" id="ingredients" name="ingredients" className="max-w-[800px] border-2 border-gray-300 rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={ingredient} onChange={(event) => handleIngredientChange(event, index)}/>
        ))}
        <button onClick={addIngredient} type="button" className="max-w-[200px] px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300">Add Ingredient</button>
        <label htmlFor="instructions" className="text-lg font-medium text-gray-700 mb-2">Instructions:</label>
        <textarea  id="instructions" name="instructions" onChange={handleChange} className="max-w-[800px] border-2 border-gray-300 rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40"></textarea>
        <label htmlFor="imageUrl" className="text-lg font-medium text-gray-700 mb-2">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} className="max-w-[800px] border-2 border-gray-300 rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label htmlFor="cookingTime" className="text-lg font-medium text-gray-700 mb-2">Cooking Time:</label>
        <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange} className="max-w-[800px] border-2 border-gray-300 rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        {errorMessage && <p className="text-red-500 font-medium my-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 font-medium my-4">{successMessage}</p>}
        <button type="submit" className="max-w-[200px] px-6 py-3 bg-green-500 text-white font-bold rounded-xl shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300">Create Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe