import React, { Component } from "react";
import "../css/Table.css";

class Table extends Component {
    render() {
        const { userInfos } = this.props;
        return (
            <div className="Table">
                <table>
                    <tr>
                        <th className="stt">#</th>
                        <th className="cot">First</th>
                        <th className="cot">Last</th>
                        <th className="cot">Handle</th>
                    </tr>
                    {
                        userInfos.map((user, index) => {
                            let className
                            if (user.isEven === true) {
                                className = 'cot-le';
                            }
                            return (<tr className={className}>
                                <td className="stt">{index+1}</td>
                                <td className="cot">{user.first}</td>
                                <td className="cot">{user.last}</td>
                                <td className="cot">{user.handle}</td>
                            </tr> )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default Table;