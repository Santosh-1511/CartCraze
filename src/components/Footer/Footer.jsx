import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='page-end1'>
            <div className='part-1'>
                <ul>
                    <h3>Welcome to CartCraze</h3>
                    <li>Social Responsibility</li>
                    <li>Sustainability</li>
                    <li>Our Factory</li>
                    <li>About Us</li>
                    <li>Newsroom</li>
                </ul>
            </div>
            <div className='part-2'>
                <ul>
                    <h3>Help</h3>
                    <li>Payment Methods</li>
                    <li>Shipping & Delivery</li>
                    <li>Return Policy</li>
                    <li>Cookies Settings</li>
                
                </ul>
            </div>
            <div className='part-3'>
                <ul>
                    <h3>Policies</h3>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
            
                </ul>
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright@CartCraze(2024)</p>
        </div>
      
    </div>
    
  )
}

export default Footer
