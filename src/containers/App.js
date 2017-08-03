import React from 'react';
import {RecipeBlock} from '../components/RecipeBlock.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <header className="container">
          <h1>Veggie Recipe Book</h1>
        </header>
        <div className="container">
          <h2>Recepie List</h2>

          <RecipeBlock />
          <RecipeBlock />
          <RecipeBlock />
          <RecipeBlock />
          <RecipeBlock />

        </div>
      </div>
    )
  }
}

export default App;