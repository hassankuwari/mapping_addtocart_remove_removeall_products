import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cartLogo from '../Images/cart-fill.svg';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { removeAllProduct, removeClickedProduct } from '../ReduxManager/Action';


const CustomNavbar = () => {


  const [showModal, setShowModal] = useState(false); //state for handling hide and show modal

  const dispatch = useDispatch();

  const userCartItems = useSelector((state) => state.userCart) //used to fetch all cart items


  // open modal
  const handleShowModal = () => {
    setShowModal(true)
  }


  // close modal
  const handleClose = () => {
    console.log("close modal");
    setShowModal(false)
  }


  // remove clicked item
  const handleRemove = (id) => {
    dispatch(removeClickedProduct(id))
    console.log("item removed", id);
  }


  //remove all products from cart
  const handleRemoveAll = () => {
    console.log("removed all");
    dispatch(removeAllProduct([]))
    setShowModal(false);
  }



  return (
    <div>

      {/* navbar start */}
      <Navbar bg="dark" data-bs-theme="dark" className='sticky-nav'>
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='cart-logo' onClick={handleShowModal}>
              <div className='cart-logo-container' data-cartcount={userCartItems.length}>
                <img src={cartLogo} alt="" />
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      {/* modal start */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='modal-body'>
            <ul>
              {userCartItems.map((item, i) => {
                return (
                  <li className='cart-list' key={i}>
                    <div className='thumbnail-container'>
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className='details-container'>
                      <div>Title: {item.title}</div>
                      <div>Brand: {item.brand}</div>
                      <div>Price: {item.price}</div>
                      <div>
                        <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                      </div>
                    </div>
                  </li>
                )
              })
              }
            </ul>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleRemoveAll}>
            Remove All
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default CustomNavbar
