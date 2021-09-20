import React from 'react'
import { useHistory } from 'react-router-dom';
import { Nav, Dropdown, Image } from 'react-bootstrap';

// import Image1 from '../../assets/brandlogo.svg'
// import Image2 from '../../assets/transaction.svg'
// import Image3 from '../../assets/product.svg'
// import Image4 from '../../assets/topping.svg'
function User(props){
    const router = useHistory();
    const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
    const goToProfile = () => router.push('/profile');
    const goToCart = () => router.push('/cart');

    return (
        <div>
            <Nav.Link onClick={goToCart}>
                <img src="/img/cart.svg" alt="cart" />
                {dataLogin.order.length > 0 && 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{dataLogin.order.length}</span>
                }
            </Nav.Link>
            <Dropdown as={Nav.Item} className="ml-3">
                <Dropdown.Toggle as={Nav.Link}>
                    {dataLogin.avatar ? <img src={dataLogin.image} alt="profile" className="img-avatar" />
                        : <img src="/img/profile/person-circle.png" alt="profile" className="img-avatar" />
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu align="right">
                    <Dropdown.Item onClick={goToProfile} ><img src="/img/user.svg" alt="profile" className="img-icon mr-2" />Profile</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={props.handleLogout} ><img src="/img/logout.svg" alt="logout" className="img-icon mr-2" />Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
};

export default User
