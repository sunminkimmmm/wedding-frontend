import React, { Component } from 'react';

// import { Link } from "react-router-dom";
class Subpage04List extends Component {
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
                        <th>chk</th><th>분류</th > <th>업체명</th> <th>담당자</th> <th>휴대폰</th> <th>전화번호</th>
                        <th>팩스번호</th>
                    </tr>
                    {/* {customer} */}
                </table>

            </div>
        );
    }
}

export default Subpage04List;