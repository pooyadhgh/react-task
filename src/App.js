import React from 'react';
import Header from './components/Header/Header';
import ProductItem from './components/ProductItem/ProductItem';

class App extends React.Component {
  state = {
    isHidden: false,
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

  toggleHandler() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  deleteProduct(id) {
    console.log(id);
    const clonedFruits = [...this.state.fruits];
    const selectedFruit = clonedFruits.filter(item => {
      return item.id !== id;
    });
    console.log(selectedFruit);
  }

  addProduct(id) {
    const clonedFruits = [...this.state.fruits];
    const selectedFruit = clonedFruits.find(item => {
      return item.id === id;
    });
    selectedFruit.quantity += 1;
    this.setState({ fruits: clonedFruits });
  }

  subtractProduct(id) {
    const clonedFruits = [...this.state.fruits];
    const selectedFruit = clonedFruits.find(item => {
      return item.id === id;
    });
    if (selectedFruit.quantity >= 1) {
      selectedFruit.quantity -= 1;
      this.setState({ fruits: clonedFruits });
    }
  }

  addNewProduct() {}

  render() {
    const allProducts = this.state.fruits.map(fruit => {
      const { name, quantity, id } = fruit;
      return (
        <ProductItem
          key={id}
          name={name}
          quantity={quantity}
          add={this.addProduct.bind(this, id)}
          subtract={this.subtractProduct.bind(this, id)}
        />
      );
    });

    return (
      <div id="main" className="container">
        <Header
          items={this.state.fruits.length}
          toggle={this.toggleHandler.bind(this)}
          isHidden={this.state.isHidden}
        />

        <table className="table mt-5">
          <thead>
            <tr className="table-dark">
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {this.state.isHidden
              ? allProducts
              : 'Click on the button to show products'}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
