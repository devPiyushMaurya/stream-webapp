/* eslint-disable */

import Layout from '@/container/layout/layout';
import { LOGO } from '@/lib/assets';
import React from 'react';


const AboutUs = () => {
    // const members=['PIYUSH',' Aditya','Ubesh','Manish','Kapil','Rajat',]
    const members = [{
        name: 'PIYUSH',
        designation: 'Leader',
    }, {
        name: 'ADITYA',
        designation: 'Leader',
    }, {
        name: 'RAJAT',
        designation: 'Leader',
    }, {
        name: 'UBESH',
        designation: 'Leader',
    }, {
        name: 'MANISH',
        designation: 'Leader',
    }, {
        name: 'KAPIL',
        designation: 'Leader',
    }, {
        name: 'HIMANSHU',
        designation: 'Leader',
    }, {
        name: 'ROHAN',
        designation: 'Leader',
    }]
    return (<>
        <Layout>
            <div className="container">


                <h2 className="heading">About Us</h2>
                <p className="text">
                    Welcome to our company! We are dedicated to providing high-quality products and services to our valued customers. With years of experience in the industry, we take pride in our commitment to excellence and customer satisfaction.
                </p>
                <p className="text">
                    Our team consists of passionate professionals who are experts in their respective fields. We believe in innovation, integrity, and teamwork, and these values drive everything we do. Whether you're a long-time customer or new to our brand, we're excited to serve you and exceed your expectations.
                </p>
                <p className="text">
                    Thank you for choosing us. We look forward to the opportunity to serve you and build a lasting relationship.
                </p>
                <h3 className='w-100 text-center'>Dev Team</h3>
                <div className="team-container">

                    {members.map((item) => {
                        return (
                            <div className="team-member mx-3">
                                <p className="member-name">{item.name}</p>
                                {/* <p>item.designation</p> */}
                            </div>
                        )

                    })}

                </div>
                <img className="logo" src={LOGO} alt="Company Logo" />
            </div>
        </Layout>

        <style>
            {`
    /* AboutUs.css */
    
    
    
    .heading { 
        margin-top:20px;
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .text {
      font-size: 16px;
      line-height: 1.5;
    }
    
    .team-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      flex-wrap:wrap;
    }
    
    .team-member {
      text-align: center;
    }
    
    .member-name {
      font-weight: bold;
      margin-top: 5px;
    }
    
    .logo {
      max-width: 100px;
      margin-top: 20px;
    }
    `}
        </style>
    </>
    );
};

export default AboutUs;
