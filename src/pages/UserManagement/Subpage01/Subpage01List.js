import React, { Component } from 'react';

// import { Link } from "react-router-dom";
class Subpage01List extends Component {
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
                        <th>chk</th><th>등급</th > <th>이름</th> <th>휴대폰</th> <th>전화번호</th>
                        <th>이메일</th><th>사용</th><th>수정</th><th>삭제</th>
                    </tr>
                    {/* {customer} */}
                </table>

            </div>
        );
    }
}

export default Subpage01List;