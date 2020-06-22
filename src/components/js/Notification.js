import React, { Component } from "react";
import "../css/Notification.css";

export default class Notification extends Component {
    render() {
        const hasUnread = this.props.hasUnread;
        return (
          <div className="Notification">
            <i className="flaticon-bell bell"></i>
            {hasUnread === true && <div className="circle"></div>}
            {hasUnread === false && <div></div>}
          </div>
        );
    }
}
