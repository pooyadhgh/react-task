import React from 'react';
import Product from './components/Product/Product';

class App extends React.Component {
  state = {
    fruits: [
      {
        name: 'apple',
        quantity: 2,
        id: 1,
      },
      {
        name: 'orange',
        quantity: 4,
        id: 2,
      },
      {
        name: 'cucumber',
        quantity: 3,
        id: 3,
      },
    ],
  };

  render() {
    return (
      <div id="main" className="container">
        <h1>Grocery List</h1>

        {this.state.fruits.map(fruit => {
          const { name, quantity, id } = fruit;
          return <Product key={id} name={name} quantity={quantity} />;
        })}
      </div>
    );
  }
}

export default App;
