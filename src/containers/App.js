import React from 'react';
import {RecipeBlock} from '../components/RecipeBlock.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <header className="container">
          <h1>Veggie Recipe Book</h1>
        </header>
        <div className="container">
          <h2>Recipe List</h2>

          <div className="recipe-list d-flex justify-content-center flex-wrap">
            <RecipeBlock title="Recipe 1" image="http://via.placeholder.com/350x150" />
            <RecipeBlock title="Recipe 2" image="http://via.placeholder.com/350x150" />
            <RecipeBlock title="Recipe 3" image="http://via.placeholder.com/350x150" />
            <RecipeBlock title="Recipe 4" image="http://via.placeholder.com/350x150" />
            <RecipeBlock title="Recipe 5" image="http://via.placeholder.com/350x150" />
          </div>

        </div>
      </div>
    )
  }
}

export default App;