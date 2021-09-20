import React from 'react'
import { useHistory } from 'react-router-dom';
import { Nav, Dropdown, Image } from 'react-bootstrap';
import cart from '../../assets/cart.svg'
import logout from '../../assets/logout.svg'
import user from '../../assets/user.svg'

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
        <div style={{display: 'flex'}} >
            <Nav.Link className='position-relative mx-3 my-auto ' onClick={goToCart}>
                <Image src={cart} alt="cart" />
                {dataLogin.order.length > 0 && 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{dataLogin.order.length}</span>
                }
            </Nav.Link>
            <Dropdown as={Nav.Item} className="ml-3">
                <Dropdown.Toggle as={Nav.Link}>
                    {dataLogin.avatar ? <img src={dataLogin.image} alt="profile" className="img-avatar" style={{ position: 'relative', transform: 'translate(15px, -3px)'}} />
                        : <img src={dataLogin.image} alt="profile" className="img-avatar" style={{ position: 'relative', transform: 'translate(35px, -3px)'}} />
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu align="right">
                    <Dropdown.Item onClick={goToProfile} ><img src={user} alt="profile" className="img-icon mr-2" />Profile</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={props.handleLogout} ><img src={logout} alt="logout" className="img-icon mr-2" />Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
};

export default User
