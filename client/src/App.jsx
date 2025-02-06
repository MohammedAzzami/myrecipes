import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import SavedRecipes from "./pages/SavedRecipes";
import CreateRecipe from "./pages/CreateRecipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
