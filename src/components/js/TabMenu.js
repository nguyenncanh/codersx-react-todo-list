import React, { Component } from "react";
import "../css/TabMenu.css";

class TabMenu extends Component {
    render() {
        var items = this.props.title
        return (
            <div className="TabMenu">
                <ul>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i className="flaticon-home"></i>
                            </div>
                            <div className="name">{items[0].label}</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i className="flaticon-gift"></i>
                            </div>
                            <div className="name">{items[1].label}</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i className="flaticon-upload"></i>
                            </div>
                            <div className="name">{items[2].label}</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i className="flaticon-food"></i>
                            </div>
                            <div className="name">{items[3].label}</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>
                            <div className="name">{items[4].label}</div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TabMenu;