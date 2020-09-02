import React, { Component } from 'react';

// import { Link } from "react-router-dom";
class Subpage05List extends Component {
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

                <br /><br />
                <table border="1" style={styles}>
                    <tr>
                        <th>행사구분</th><th>메뉴명</th > <th>대인금액</th> <th>소인금액</th> <th>비고</th>
                        <th>수정</th><th>삭제</th>
                    </tr>
                    {/* {customer} */}
                </table>

            </div>
        );
    }
}

export default Subpage05List;