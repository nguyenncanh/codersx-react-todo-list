import React, { Component } from "react";
import "../css/TabMenu.css";

class TabMenu extends Component {
    render() {
        return (
            <div className="TabMenu">
                <ul>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i class="flaticon-home"></i>
                            </div>
                            <div className="name">HOME</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i class="flaticon-gift"></i>
                            </div>
                            <div className="name">DEALS</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i class="flaticon-upload"></i>
                            </div>
                            <div className="name">UPLOAD</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i class="flaticon-food"></i>
                            </div>
                            <div className="name">WORK</div>
                        </a>
                    </li>
                    <li>
                        <a href='!#'>
                            <div className="icon">
                                <i class="flaticon-settings"></i>
                            </div>
                            <div className="name">SETTINGS</div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TabMenu;