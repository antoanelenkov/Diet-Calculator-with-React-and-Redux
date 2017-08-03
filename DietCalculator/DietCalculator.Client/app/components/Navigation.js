import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav>
                    <Link to="/">Home</Link>
                    {" | "}
                    <Link to="/foods">Foods</Link>
                    {" | "}
                    <Link to="/manage-food">Add new food</Link>
                    {" | "}
                    <Link to="/consumations">Daily consumation</Link>
                    {" | "}
                    <Link to="/manage-consumation">Add daily consumation</Link>
                </nav>
            </div>
        );
    }
}

export default Navigation;