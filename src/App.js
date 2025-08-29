import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([
    { name: "Pasta", description: "Creamy white sauce pasta", ingredients: "Pasta, Milk, Cheese, Garlic" },
    { name: "Sandwich", description: "Veg sandwich with mayo", ingredients: "Bread, Tomato, Lettuce, Mayo" }
  ]);

  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", ingredients: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecipe.name && newRecipe.description) {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({ name: "", description: "", ingredients: "" });
    }
  };

  return (
    <div className="App">
      <h1>🍴 Recipe Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" value={newRecipe.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={newRecipe.description} onChange={handleChange} required />
        <input type="text" name="ingredients" placeholder="Ingredients" value={newRecipe.ingredients} onChange={handleChange} />
        <button type="submit">Add Recipe</button>
      </form>

      <div className="recipe-list">
        {recipes.map((r, index) => (
          <div key={index} className="recipe-card">
            <h2>{r.name}</h2>
            <p>{r.description}</p>
            <small><b>Ingredients:</b> {r.ingredients}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
