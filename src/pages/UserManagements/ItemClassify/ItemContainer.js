import React, { Component } from 'react';
import ItemPresenter from './ItemPresenter';
import { UnitprocurementitemsClassifyAPI } from '../../../api';
class ItemContainer extends Component {
    state = {
        itemRegisterData: {
            eventClassification: '',
            itemClassificationName: '',
            order: '',
            useStatus: '',
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
        this.onGetItemList();

    }

    /**
       * 부대품목 분류 조회
       * --
       *
       */
    onGetItemList = async () => {
        let result = await UnitprocurementitemsClassifyAPI.findAll();
        let itemInfo;
        if (result.code === 200) {
            itemInfo = result.response.map(item => {
                return {
                    key: ++this.state.selectedKey,
                    id: item.id,
                    eventClassification: item.eventClassification,
                    itemClassificationName: item.itemClassificationName,
                    order: item.order,
                    useStatu: item.useStatus
                };
            });
            this.setState({
                data: itemInfo
            });
        }
    };

    /**
     * 부대품목 분류 등록
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
                    eventClassification: a.eventClassification,
                    itemClassificationName: a.itemClassificationName,
                    order: a.order,
                    useStatu: a.useStatus
                }]
        })

        let result = await UnitprocurementitemsClassifyAPI.create(
            [a.eventClassification, a.itemClassificationName, a.order, a.useStatus]
        )
        this.onGetItemList();
        this.props.onGetItemClassifications(a.id);
        return result;

    }

    /**
     * 부대품목 분류 수정
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

        let result = await UnitprocurementitemsClassifyAPI.update(a.id,
            [a.eventClassification, a.itemClassificationName, a.order, a.useStatus]
        )
        return result;
    }

    /**
     * 부대품목 분류 삭제
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

        let result = await UnitprocurementitemsClassifyAPI.remove(a.id)
        this.props.onGetItemClassifications(a.id);
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
                eventClassification: findObj[0].eventClassification,
                itemClassificationName: findObj[0].itemClassificationName,
                order: findObj[0].order,
                useStatu: findObj[0].useStatus
            }
        })
    };

    /**
     * 부대품목분류 테이블 데이터
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
                itemRegisterData["eventClassification"] = '',
                itemRegisterData["itemClassificationName"] = '',
                itemRegisterData["order"] = '',
                itemRegisterData["useStatus"] = ''
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
                itemRegisterData["eventClassification"] = '',
                itemRegisterData["itemClassificationName"] = '',
                itemRegisterData["order"] = '',
                itemRegisterData["useStatus"] = ''
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

    render() {
        return (
            <div>
                <ItemPresenter
                    {...this.state}
                    onChangeFilter={this.onChangeFilter}
                    onRegister={this.onRegister}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onDetail={this.onDetail}
                    onChangeInput={this.onChangeInput}
                    onChangeSelect={this.onChangeSelect}
                />
            </div>
        );
    }
}

export default ItemContainer;