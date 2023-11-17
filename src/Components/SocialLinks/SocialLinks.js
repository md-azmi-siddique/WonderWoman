import React from 'react';
import img1 from '../../Assets/FeaturedTour/img1.jpg'

const SocialLinks = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid grid-cols-5 gap-4'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>

            </div>
        </div>
    );
};

export default SocialLinks;