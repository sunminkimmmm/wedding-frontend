import React, { Component } from 'react';
import Subpage02Presenter from './Subpage02Presenter';
import { UnitprocurementitemsAPI } from '../../../api';

class Subpage02Container extends Component {
    state = {
        itemRegisterData: {
            // eventClassification:'',
            itemName: '',
            price: '',
            itemClassifications_ID: '',
            memo: '',
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
        searchTableVisible: true

    };

    componentDidMount() {
        this.onGetItemClassifications();
        this.onGetItemList();

    }

    /**
       * 부대품목 조회
       * --
       *
       */
    onGetItemList = async () => {
        let result = await UnitprocurementitemsAPI.findAll();
        let itemInfo;

        if (result.code === 200) {
            itemInfo = result.response.map(item => {
                return {
                    key: ++this.state.selectedKey,
                    id: item.id,
                    itemName: item.itemName,
                    price: item.price,
                    itemClassifications_ID: item.itemClassifications_ID,
                    memo: item.memo
                };
            });
            this.setState({
                data: itemInfo
            });
        };
    };
    /**
       * 부대품목분류 조회
       * --
       *
       */
    onGetItemClassifications = async (ids) => {
        let result = await UnitprocurementitemsAPI.findItemClassifications();
        let itemInfo;
        if (result.code === 200) {
            itemInfo = result.response.map(item => {
                return {
                    key: ++this.state.selectedKey2,
                    id: ids, //item.id
                    eventClassification: item.eventClassification,
                    itemClassificationName: item.itemClassificationName,
                    order: item.order,
                    useStatus: item.useStatus
                };
            });
            this.setState({
                itemClassifications: itemInfo
            });
        }
        itemInfo = result.response.map(item => {
            return {
                key: ++this.state.selectedKey3,
                value: item.id,
                name: item.itemClassificationName,
            };
        });
        this.setState({
            itemClassificationName: itemInfo
        });

        let datas = this.state.data.filter(function (element) {
            if (element.id !== ids) {
                return element;
            }
        })
        console.log(datas)
        this.setState({ data: datas })
        this.onGetItemList();


    };

    /**
     * 부대품목등록
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
                    itemName: a.itemName,
                    price: a.price,
                    itemClassifications_ID: a.itemClassifications_ID,
                    memo: a.memo
                }]
        })

        let result = await UnitprocurementitemsAPI.create(
            [a.itemName, a.price, a.itemClassifications_ID, a.memo]
        )
        this.onGetItemList();
        return result;

    }

    /**
     * 부대품목수정
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

        // let i = a.key;

        // let before = this.state.data.slice(0, i);
        // let after = this.state.data.slice(i + 1);
        // let newArr = [...before, a, ...after];
        // this.setState({
        //     data: newArr,
        //     data2: newArr
        // })

        let result = await UnitprocurementitemsAPI.update(a.id,
            [a.itemName, a.price, a.itemClassifications_ID, a.memo]
        )
        return result;
    }

    /**
     * 부대품목삭제
     * --
     * 
     */
    onDeleteItemList = async (ids) => {
        let a = this.state.itemRegisterData;

        let datas = this.state.data.filter(function (element) {
            if (element.id !== a.id) {
                return element;
            }
        })
        console.log(datas)
        this.setState({ data: datas })

        let result = await UnitprocurementitemsAPI.remove(a.id)


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
                itemName: findObj[0].itemName,
                price: findObj[0].price,
                itemClassifications_ID: findObj[0].itemClassifications_ID,
                memo: findObj[0].memo
            }
        })
    };

    /**
     * 부대품목테이블 데이터
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
        this.onGetItemClassifications();
        this.setState(({ itemRegisterData }) => {
            return (

                itemRegisterData["itemName"] = '',
                itemRegisterData["price"] = '',
                itemRegisterData["memo"] = ''
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
                itemRegisterData["itemClassifications_ID"] = '',
                itemRegisterData["itemName"] = '',
                itemRegisterData["price"] = '',
                itemRegisterData["memo"] = ''
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
                <Subpage02Presenter
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
                    onGetItemClassifications={this.onGetItemClassifications}
                    onDeleteItemList={this.onDeleteItemList}
                />
            </div>
        );
    }
}

export default Subpage02Container;
