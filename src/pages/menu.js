import React from 'react'
import { Link } from 'gatsby'

// import BlogPage from './blog'
// import AboutPage from './about'
// import ServicesPage from './services'
// import ContactPage from './contact'
// import '../components/layout'

const MenuPage = () => {
    return (
        <div>
           <ul>
               <li><Link to="">Home</Link></li>
               <li><Link to="/blog/">Blogs</Link></li>
               <li><Link to="/about/">About Us</Link></li>
               <li><Link to="/contact/">Contact Us</Link></li>
               <li><Link to="/services/">Our Services</Link></li>
           </ul>
        </div>
    )
}

export default MenuPage