import React from 'react';
import { Link } from 'react-router-dom';

const MyButtonLink: React.FC = () => {
    return (
        <Link to="/Home" className=" text-blue px-4 py-2  hover:text-blue-600">
            Show More
        </Link>
    );
};

export default MyButtonLink;