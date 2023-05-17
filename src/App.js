import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header>
        <h1>ReactMeals</h1>
      </Header>
      <main>
        <Meals />
      </main>
    </Fragment>
    
  );
}

export default App;
