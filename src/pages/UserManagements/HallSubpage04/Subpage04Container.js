import React, { Component } from 'react';
import Subpage04Presenter from './Subpage04Presenter';
import { HallsAPI } from '../../../api';

class Subpage04Container extends Component {
    state = {
        itemRegisterData: {
            // eventClassification:'',
            order: '',
            hallClassification: '',
            hallName: '',
            id: ''
        },
        data: [],
        itemClassifications: [],
        itemClassificationName: [],
        searchData: [],
        selectedKey: -1,
        selectedKey2: -1,
        selectedKey3: 0,
        searchWord: '',
        searchTableVisible: true,

    };

    componentDidMount() {
        this.onGetItemList();

    }

    /**
       * 홀조회
       * --
       *
       */
    onGetItemList = async () => {
        let result = await HallsAPI.findAll();
        let itemInfo;
        if (result.code === 200) {
            itemInfo = result.response.map(item => {
                return {
                    key: ++this.state.selectedKey,
                    id: item.id,
                    order: item.order,
                    hallClassification: item.hallClassification,
                    hallName: item.hallName
                };
            });
            this.setState({
                data: itemInfo
            });

        }
    };


    /**
     * 홀등록
     * --
     * 
     */
    onPostItemList = async () => {
        let a = this.state.itemRegisterData;
        let i = this.state.data.length;
        this.setState({
            data: [
                ...this.state.data,
                {
                    key: i++,
                    id: a.id,
                    order: a.order,
                    hallClassification: a.hallClassification,
                    hallName: a.hallName
                }]
        })

        let result = await HallsAPI.create(
            [a.order, a.hallClassification, a.hallName]
        )
        this.onGetItemList();
        return result;

    }

    /**
     * 홀수정
     * --
     * 
     */
    onUpdateItemList = async () => {
        let a = this.state.itemRegisterData;
        let newArr = this.state.data.map(item => {
            if (item.id == a.id) {
                return Object.assign({}, this.state.itemRegisterData)
            }
            else {
                return item
            }
        })

        this.setState({
            data: newArr,
            searchData: newArr
        })

        let result = await HallsAPI.update(a.id,
            [a.order, a.hallClassification, a.hallName]
        )
        return result;
    }

    /**
     * 홀삭제
     * --
     * 
     */
    onDeleteItemList = async () => {
        let a = this.state.itemRegisterData;

        let datas = this.state.data.filter(function (element) {
            if (element.id !== a.id) {
                return element;
            }
        })
        console.log(datas)
        this.setState({ data: datas })

        let result = await HallsAPI.remove(a.id)
        return result;
    }

    /**
     * 상세조회
     * --
     * 
     */
    onDetail = key => {
        this.onGetItemList();
        const findObj = this.state.data.filter(item => {
            if (item.key === key) {
                return item.key === key;
            }
        });
        console.log(findObj)
        this.setState({
            itemRegisterData: {
                key: findObj[0].key,
                id: findObj[0].id,
                order: findObj[0].order,
                hallClassification: findObj[0].hallClassification,
                hallName: findObj[0].hallName
            }
        })
    };

    /**
     * 홀테이블 데이터
     * --
     * 
     */
    onChangeFilter = props => {
        this.setState(({ itemRegisterData }) => {
            return (itemRegisterData[props.type] = props.data);
        });
    };

    /**
      * 등록요청
      * --
      * 
      */
    onRegister = e => {
        console.log('등록요청');
        this.onPostItemList();
        this.setState(({ itemRegisterData }) => {
            return (
                itemRegisterData["order"] = '',
                itemRegisterData["hallName"] = ''
            );
        });
    };

    /**
     * 수정요청
     * --
     * 
     */
    onUpdate = e => {
        console.log('수정요청');
        this.onUpdateItemList();
        this.setState({
            searchTableVisible: true,
            searchWord: '',
            searchSelect: ''
        })

    };

    /**
     * 삭제요청
     * --
     * 
     */
    onDelete = (e) => {
        this.onDeleteItemList();
        this.setState({ searchTableVisible: true })
        this.setState(({ itemRegisterData }) => {
            return (
                itemRegisterData["order"] = '',
                itemRegisterData["hallName"] = ''
            );
        });
    }

    /**
      * input값 저장
      * --
      * 
      */
    onChangeInput = (type, data) => {
        this.setState({ [type]: data.target.value });
    };

    /**
     * select값 저장
     * --
     * 
     */
    onChangeSelect = (type, data) => {
        this.setState({ [type]: data });
    };

    /**
      * 검색
      * --
      * 
      */
    onSearch = () => {
        this.setState({ searchTableVisible: false })
        let selects = this.state.searchSelect;
        let word = this.state.searchWord;
        let searchData = this.state.data.filter(function (element) {
            if ((selects === "total" && element.itemName[0] === word || element.itemName === word)
                || (selects === "total" && element.memo[0] === word) || element.memo === word) {
                return element;
            }
            else if (selects === "itemName" && element.itemName[0] === word || element.itemName === word) {
                return element;
            }
            else if (selects === "memo" && element.memo[0] === word || element.memo === word) {
                return element;
            }
        });
        this.setState({ searchData: searchData })

    }

    /**
     * 전체검색
     * --
     * 
     */
    onTotalSearch = () => {
        this.setState({
            searchTableVisible: true,
            searchWord: '',
            searchSelect: ''
        })
    }

    render() {
        return (
            <div>
                <Subpage04Presenter
                    {...this.state}
                    onChangeFilter={this.onChangeFilter}
                    onRegister={this.onRegister}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onDetail={this.onDetail}
                    onChangeInput={this.onChangeInput}
                    onChangeSelect={this.onChangeSelect}
                    onSearch={this.onSearch}
                    onTotalSearch={this.onTotalSearch}
                />
            </div>
        );
    }
}

export default Subpage04Container;
