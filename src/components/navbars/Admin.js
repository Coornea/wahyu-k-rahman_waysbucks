import React from 'react'
import { useHistory } from 'react-router-dom';
import { Nav, Dropdown, Image } from 'react-bootstrap';

import Image1 from '../../assets/brandlogo.svg'
import Image2 from '../../assets/transaction.svg'
import Image3 from '../../assets/product.svg'
import Image4 from '../../assets/topping.svg'
import Image5 from '../../assets/logout.svg'

function Admin(props) {
    const router = useHistory();
    const goToTransaction = () => {router.push('/transaction')};
    const goToAddProduct = () => {router.push('/addproduct')};
    const goToAddTopping = () => {router.push('/addtopping')};

    return (
        <div>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle as={Nav.Link}><Image src={Image1} alt='user account' style={{ width:60 }} /></Dropdown.Toggle>
                    <Dropdown.Menu align='right'>
                        <Dropdown.Item onClick={goToTransaction}><img src={Image2} alt='To Transaction' className='img-icon' />Transactions</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddProduct}><img src={Image3} alt='To Add Product' className='img-icon' />Add Product</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddTopping}><img src={Image4} alt='To Add Topping' className='img-icon' />Add Topping</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={props.handleLogout}><img src={Image5} alt='Logout' className='img-icon' />Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
    )
}

export default Admin
