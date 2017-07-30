import React, { PropTypes } from 'react';

class FoodsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            food: {
                name: null,
                calories: null
            }
        }
    }


    render() {
        return (
            <div>
                <h3 className="centered">Add new food</h3>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type:</label>
                            <select className="form-control" id="type">
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodsPage;