import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav>
                    <Link to="/calculator">Home</Link>
                    {" | "}
                    <Link to="/calculator/foods">Foods</Link>
                    {" | "}
                    <Link to="/calculator/manage-food">Add new food</Link>
                    {" | "}
                    <Link to="/calculator/consumations">Daily consumation</Link>
                    {" | "}
                    <Link to="/calculator/manage-consumation">Add daily consumation</Link>
                </nav>
            </div>
        );
    }
}

export default Navigation;