import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Food from './Food';

class Dashboard1 extends Component {
    render() {
        return (
            <div id="div4">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
                            <Navbar />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <Menu />
                        </div>
                        <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                            <Food />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard1;