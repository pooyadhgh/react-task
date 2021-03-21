import React from 'react';
import Header from './components/Header/Header';
import ProductItem from './components/ProductItem/ProductItem';

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
        <Header items={this.state.fruits.length} />
        <table className="table mt-5">
          <thead>
            <tr className="table-dark">
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {this.state.fruits.map(fruit => {
              const { name, quantity, id } = fruit;
              return <ProductItem key={id} name={name} quantity={quantity} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
