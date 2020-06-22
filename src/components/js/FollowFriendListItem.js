import React, { Component } from "react";
import "../css/FollowFriendListItem.css";

class FollowFriendListItem extends Component {
    render() {
        var user = this.props.user;
        return (
            <div className="FollowFriendListItem">
                <div className='user'>
                    <img src={user.img}></img>
                    <div className='info'>
                        <div className='name'>{user.name}</div>
                        <div className='recomment'>Gợi ý cho bạn</div>
                    </div>
                </div>
                <div className='follow'>Theo dõi</div>
            </div>
        );
    }
}

export default FollowFriendListItem;