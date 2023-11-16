import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-slate-600 text-white font-serif py-2 px-6 rounded md:ml-8 hover:bg-red-500 duration-500'>
            {props.children}
        </button>
    );
};

export default Button;