import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import './App.scss';
import RecipePage from './components/RecipePage';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (

    <section id='container-main'>
       <Router>
      <Header onSearchChange={handleSearchChange} onCategorySelect={handleCategorySelect} />
      <Routes>
        <Route
          path="/"
          element={<RecipeList searchTerm={searchTerm} selectedCategory={selectedCategory} />}
        />
        <Route
          path="/breakfast"
          element={<RecipeList searchTerm={searchTerm} selectedCategory="breakfast" />}
        />
        <Route
          path="/lunch"
          element={<RecipeList searchTerm={searchTerm} selectedCategory="lunch" />}
        />
        <Route
          path="/dinner"
          element={<RecipeList searchTerm={searchTerm} selectedCategory="dinner" />}
        />
        <Route
          path="/dessert"
          element={<RecipeList searchTerm={searchTerm} selectedCategory="dessert" />}
        />
        <Route
          path="/salty"
          element={<RecipeList searchTerm={searchTerm} selectedCategory="salty" />}
        />
         <Route
          path="/recipe/:id"
          element={<RecipePage />}
        />
      </Routes>
      <footer className="footer">
        <p>Desenvolvido para estudo do React</p>
      </footer>
    </Router>
    </section>

  );
};

export default App;
