import React, { Component } from 'react';
import Subpage01Presenter from './Subpage01Presenter';
import { MenuApi } from '../../../api';

class Subpage01Container extends Component {
    state = {
        menuRegisterData: {
            eventClassification: 'eventClassification',
            menuName: '',
            adultCharge: '',
            childCharge: '',
            memo: '',
            id: ''
        },
        data: [],
        searchData: [],
        selectedKey: -1,
        searchWord: '',
        searchTableVisible: true

    };

    componentDidMount() {
        this.onGetMenuList();
    }

    /**
       * 메뉴조회
       * --
       *
       */
    onGetMenuList = async () => {
        let result = await MenuApi.findAll();
        let menuInfo;
        if (result.code === 200) {
            menuInfo = result.response.map(item => {
                return {
                    key: ++this.state.selectedKey,
                    id: item.id,
                    eventClassification: item.eventClassification,
                    menuName: item.menuName,
                    adultCharge: item.adultCharge,
                    childCharge: item.childCharge,
                    memo: item.memo
                };
            });
            this.setState({
                data: menuInfo
            });
        }
    };

    /**
     * 메뉴등록
     * --
     * 
     */
    onPostMenuList = async () => {
        let a = this.state.menuRegisterData;
        let i = this.state.data.length;
        this.setState({
            data: [
                ...this.state.data,
                {
                    key: i++,
                    id: a.id,
                    eventClassification: a.eventClassification,
                    menuName: a.menuName,
                    adultCharge: a.adultCharge,
                    childCharge: a.childCharge,
                    memo: a.memo
                }]
        })

        let result = await MenuApi.create(
            [a.eventClassification, a.menuName, a.adultCharge, a.childCharge, a.memo]
        )
        this.onGetMenuList();
        return result;

    }

    /**
     * 메뉴수정
     * --
     * 
     */
    onUpdateMenuList = async () => {
        let a = this.state.menuRegisterData;
        let newArr = this.state.data.map(item => {
            if (item.id == a.id) {
                return Object.assign({}, this.state.menuRegisterData)
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

        let result = await MenuApi.update(a.id,
            [a.eventClassification, a.menuName, a.adultCharge, a.childCharge, a.memo]
        )
        return result;
    }

    /**
     * 메뉴삭제
     * --
     * 
     */
    onDeleteMenuList = async () => {
        let a = this.state.menuRegisterData;

        let datas = this.state.data.filter(function (element) {
            if (element.id !== a.id) {
                return element;
            }
        })
        console.log(datas)
        this.setState({ data: datas })

        let result = await MenuApi.remove(a.id)
        return result;
    }

    /**
     * 상세조회
     * --
     * 
     */
    onDetail = key => {
        this.onGetMenuList();
        const findObj = this.state.data.filter(item => {
            if (item.key === key) {
                return item.key === key;
            }
        });
        console.log(findObj)
        this.setState({
            menuRegisterData: {
                key: findObj[0].key,
                id: findObj[0].id,
                eventClassification: findObj[0].eventClassification,
                menuName: findObj[0].menuName,
                adultCharge: findObj[0].adultCharge,
                childCharge: findObj[0].childCharge,
                memo: findObj[0].memo
            }
        })
    };

    /**
     * 메뉴테이블 데이터
     * --
     * 
     */
    onChangeFilter = props => {
        this.setState(({ menuRegisterData }) => {
            return (menuRegisterData[props.type] = props.data);
        });
    };

    /**
      * 등록요청
      * --
      * 
      */
    onRegister = e => {
        console.log('등록요청');
        this.onPostMenuList();
        this.setState(({ menuRegisterData }) => {
            return (
                menuRegisterData["eventClassification"] = '',
                menuRegisterData["menuName"] = '',
                menuRegisterData["adultCharge"] = '',
                menuRegisterData["childCharge"] = '',
                menuRegisterData["memo"] = ''
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
        this.onUpdateMenuList();
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
        this.onDeleteMenuList();
        this.setState({ searchTableVisible: true })
        this.setState(({ menuRegisterData }) => {
            return (
                menuRegisterData["eventClassification"] = '',
                menuRegisterData["menuName"] = '',
                menuRegisterData["adultCharge"] = '',
                menuRegisterData["childCharge"] = '',
                menuRegisterData["memo"] = ''
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
            if ((selects === "total" && element.menuName[0] === word || element.menuName === word)
                || (selects === "total" && element.memo[0] === word) || element.memo === word) {
                return element;
            }
            else if (selects === "menuName" && element.menuName[0] === word || element.menuName === word) {
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
                <Subpage01Presenter
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

export default Subpage01Container;
