import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/actions/usersActions';

const Navbar = () => {
    const router = useRouter()
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userProfile)
    const { cartItems } = useSelector(state => state.cartItems)

    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [dispatch])

    const Logout = () => {
        localStorage.removeItem('token')
        router.push('/signin')
    }

    const adminRouter = () => {
        return (
            <>
                <Link href="/admin/users">
                    <a className="dropdown-item">Users</a>
                </Link>
                <Link href="/admin/products">
                    <a className="dropdown-item">Products</a>
                </Link>
                <Link href="/admin/categories">
                    <a className="dropdown-item">Categories</a>
                </Link>
                <Link href="/admin/orders">
                    <a className="dropdown-item">Orders</a>
                </Link>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png" alt=""
                        style={{
                            borderRadius: '50%', width: '30px', height: '30px',
                            transform: 'translateY(-3px)', marginRight: '3px'
                        }} /> {userInfo?.name}
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link href="/profile">
                        <a className="dropdown-item">Profile</a>
                    </Link>
                    {
                        token && userInfo?.isAdmin && adminRouter()
                    }
                    <button className="dropdown-item" onClick={Logout}>Logout</button>
                </div>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <Link href="/">
                    <a className="navbar-brand">E-Commerce</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav p-1">
                        <li className="nav-item">
                            <Link href="/cart">
                                <a className={"nav-link"}>
                                    <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                                        <span className="position-absolute"
                                            style={{
                                                padding: '3px 6px',
                                                background: '#ed143dc2',
                                                borderRadius: '50%',
                                                top: '-10px',
                                                right: '-10px',
                                                color: 'white',
                                                fontSize: '14px'
                                            }}>
                                            {cartItems?.length}
                                        </span>
                                    </i> Cart
                                </a>
                            </Link>
                        </li>
                        {
                            token && userInfo ? loggedRouter() : (<li className="nav-item">
                                <Link href="/signin">
                                    <a className={"nav-link"}>
                                        <i className="fas fa-user" aria-hidden="true"></i> Sign in
                                    </a>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;