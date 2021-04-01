import React from 'react';
import Header from '../components/Header/Header';
import ProductItem from '../components/ProductItem/ProductItem';
import ProductList from '../components/ProductList/ProductList';
import AddNewProduct from '../components/AddNewProduct/AddNewProduct';
let addedProduct = {};

class App extends React.Component {
  state = {
    isHidden: true,
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

  // deleteProduct(id) {
  //   console.log(id);
  //   const clonedFruits = [...this.state.fruits];
  //   const selectedFruit = clonedFruits.filter(item => {
  //     return item.id !== id;
  //   });
  //   console.log(selectedFruit);
  // }

  addProduct = id => {
    const clonedFruits = [...this.state.fruits];
    const selectedFruit = clonedFruits.find(item => {
      return item.id === id;
    });
    selectedFruit.quantity += 1;
    this.setState({ fruits: clonedFruits });
  };

  subtractProduct = id => {
    const clonedFruits = [...this.state.fruits];
    const selectedFruit = clonedFruits.find(item => {
      return item.id === id;
    });
    if (selectedFruit.quantity >= 1) {
      selectedFruit.quantity -= 1;
      this.setState({ fruits: clonedFruits });
    }
  };

  formHandler = e => {
    e.preventDefault();
    addedProduct = {
      name: e.target.productName.value,
      quantity: +e.target.productQuantity.value,
      id: this.state.fruits.length + 1,
    };
    const addedState = [...this.state.fruits];
    addedState.unshift(addedProduct);
    this.setState({ fruits: addedState });
    e.target.productName.value = '';
    e.target.productQuantity.value = '';
  };

  render() {
    return (
      <div id="main" className="container">
        <Header
          items={this.state.fruits.length}
          toggle={this.toggleHandler.bind(this)}
          isHidden={this.state.isHidden}
        />

        <AddNewProduct
          formHandler={e => {
            this.formHandler(e);
          }}
        />

        <table className="table mt-5">
          <thead>
            <tr className="table-dark">
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {this.state.isHidden ? (
              <ProductList
                fruits={this.state.fruits}
                add={this.addProduct}
                subtract={this.subtractProduct}
              />
            ) : (
              'Click on the button to show products'
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
