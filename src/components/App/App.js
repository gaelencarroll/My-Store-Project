import React from 'react';
import './App.css';
import LowerNavBar from '../LowerNavBar';
import TopNavBar from '../TopNavBar';
import MainHomePage from '../MainHomePage/MainHomePage';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import BestDeals from '../BestDeals/BestDeals';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <LowerNavBar />
      <MainHomePage></MainHomePage>
      <CategoriesSection></CategoriesSection>
      <BestDeals></BestDeals>
    </div>
  );
}

export default App;
