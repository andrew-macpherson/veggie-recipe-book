import React from 'react';
import {RecipeBlock} from '../components/RecipeBlock.js';
import {Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
    <div>
      <header className="container">
        <h1>Veggie Recipe Book</h1>
      </header>

      <div className="container">
        <Route path="/home" component={Home} />
        <Route path="/recipe" component={Recipe} />
      </div>
    </div>
    )
  }
}

class Home extends React.Component{
  render(){
    return(
      <div>
        <h2>Recipe List</h2>

        <div className="recipe-list d-flex justify-content-center flex-wrap">
          <RecipeBlock id="1" title="Recipe 1" image="http://via.placeholder.com/350x150" />
          <RecipeBlock id="2" title="Recipe 2" image="http://via.placeholder.com/350x150" />
          <RecipeBlock id="3" title="Recipe 3" image="http://via.placeholder.com/350x150" />
          <RecipeBlock id="4" title="Recipe 4" image="http://via.placeholder.com/350x150" />
          <RecipeBlock id="5" title="Recipe 5" image="http://via.placeholder.com/350x150" />
        </div>
      </div>
    )
  }
}

class Recipe extends React.Component{
  render(){
    return(
      <div>
        <h2>Recipe</h2>

        <div className="recipe-list d-flex justify-content-center flex-wrap">
          <RecipeBlock title="Recipe 1" image="http://via.placeholder.com/350x150" />
        </div>
      </div>
    )
  }
}

export default App;