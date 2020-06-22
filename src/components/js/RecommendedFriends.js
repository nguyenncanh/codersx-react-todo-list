import React, { Component } from "react";
import "../css/RecommendedFriends.css";

class RecommendedFriends extends Component {
    render() {
        return (
            <div className="RecommendedFriends">
                <div className="recommend-header">
                    <div className="title">Gợi ý cho bạn</div>
                    <div className='see-all'>Xem tất cả</div>
                </div>
                <div className="content">{this.props.friends}</div>
            </div>
        );
    }
}

export default RecommendedFriends;