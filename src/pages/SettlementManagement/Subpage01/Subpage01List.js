import React, { Component } from 'react';
import Customer from './Subpage01Customer'
// import { Link } from "react-router-dom";
class Subpage01CustomerList extends Component {
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
                        <th>예식일</th > <th>시간</th> <th>예식홀</th> <th>고객명</th> <th>메뉴</th>
                        <th>지불보증</th> <th>예약금</th> <th>신랑정산금</th> <th>신부정산금</th> <th>총정산금액</th> <th>상태</th>
                        <th>정산</th><th>출력</th>
                    </tr>
                    {/* {customer} */}
                </table>

            </div>
        );
    }
}

export default Subpage01CustomerList;