import React from 'react'
import './footer1.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer1() {
    return (
        <div>
            <div className="container1">
                <div className='s1'>
                    <h6>/ FEATURED WORKS</h6>
                    <h4 className='custom'>These are some of our recent design projects and we are so excited to show them to you.</h4>
                </div>

                <div className="d-flex">
                    <div className="w-33333">
                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/lamp.jpg" alt="" />
                        </div>

                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/salad.jpg" alt="" /></div>
                    </div>
                    <div className="w-33333">
                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/woodcraft.jpg" alt="" /></div>
                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/fuji.jpg.webp" alt="" /></div>
                    </div>
                    <div className="w-33333">
                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/liberty.jpg.webp" alt="" /></div>
                        <div className="w-100">
                            <img src="https://preview.colorlib.com/theme/transcend/images/portfolio/shutterbug.jpg.webp" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className='white'>
                    Copyright ©2023 All rights reserved | This template is made with <FavoriteIcon />  by Colorlib
                </div>
            </div>
        </div>
    )
}

export default Footer1
