import React, { Component } from 'react';
import './App.css';
import GroceryListItem from './GroceryListItem';

const items = [
  { name: 'Peppers', count: 2 },
  { name: 'Onion', count: 1 },
  { name: 'Tortilla', count: 12 },
  { name: 'Cheese', count: 3 },
  { name: 'Lime', count: 5 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>
        {items.map((item, i) => {
          return (
            <GroceryListItem
              name={item.name}
              key={`items-${i}`}
              count={item.count}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
