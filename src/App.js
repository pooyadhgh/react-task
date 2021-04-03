import React from 'react';
import Container from './hoc/Container';
import Wrapper from './hoc/Wrapper';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Modal from './components/Modal/Modal';

let addedProduct = {};

class App extends React.Component {
  state = {
    isHidden: true,
    isShowModal: false,
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
    this.modalCancleHandler();
  };

  modalHandler = () => {
    this.setState({ isShowModal: true });
  };

  modalCancleHandler = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <Container>
        <Header
          items={this.state.fruits.length}
          toggle={this.toggleHandler.bind(this)}
          isHidden={this.state.isHidden}
          modalHandler={this.modalHandler}
        />

        <Modal
          isShowModal={this.state.isShowModal}
          formHandler={e => this.formHandler(e)}
          cancelHandler={() => this.modalCancleHandler()}
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
      </Container>
    );
  }
}

export default Wrapper(App, 'container');
