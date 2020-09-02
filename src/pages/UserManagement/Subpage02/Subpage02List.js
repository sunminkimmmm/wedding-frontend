import React, { Component } from 'react';

// import { Link } from "react-router-dom";
class Subpage02List extends Component {
    render() {
        const styles = {
            width: '1220px',
            border: '1px solid black',
            textAlign: 'center',

        }

        // let customer = this.props.customer.map(c => {
        //     return <Customer key={c.id} {...c} />
        // })
        return (
            <div>
                <table border="1" style={styles}>
                    <tr>
                        <th>날짜</th><th>시간</th > <th>아이디</th> <th>이름</th> <th>아이피</th>
                        <th>접속환경</th><th>횟수</th>
                    </tr>
                    {/* {customer} */}
                </table>

            </div>
        );
    }
}

export default Subpage02List;