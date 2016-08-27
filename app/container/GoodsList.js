'use strict';

import React, { Component, PropTypes } from 'react';
import { BackTop, Row, Col, Checkbox, Icon, Input } from 'antd';
import Detail from './Detail';
import CustomButton from '../components/CustomButton';

class GoodsCell extends  Component {
    constructor() {
        super();
        this.onClickDetail = this.onClickDetail.bind(this);
    }

    onClickDetail() {
        window.location.href = "#/detail";
    }


    render() {
        const {goods} = this.props;
        return(
            <div style={{borderBottom: '1px solid lightgrey'}}  onClick={this.onClickDetail}>
                <Col span={8}>
                    <img src={goods.image} style={{width: 100}}/>
                </Col>
                <Col span={16} style={{paddingTop: 15}}>
                    <p style={{fontSize: 20, color: 'blue'}}>{goods.name}</p>
                    <span>包邮</span>
                    <div className="clear"></div>
                    <span style={{fontSize: 18, color: 'red'}}>
                        ￥{goods.price}
                    </span>
                    <span style={{marginLeft: 10}}>3人已购买</span>
                </Col>
                <div style={{clear: 'both'}}></div>
            </div>
        );
    }
};


const backTop = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#57c5f7',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
};

class GoodsList extends Component {
    constructor(props) {
        super(props);
        var goodsList = [];
        for(var i=0; i<18; i++){
            var goods = {};
            //goods.image = "../img/cloth_" + i + ".jpg";
            goods.image = require("../../images/cloth_" + i + ".jpg")
            goods.key = i;
            goods.name = "衣服" + i;
            goods.price = 50 + i;
            goodsList.push(goods);
        }
        this.state = {
            goodsList: goodsList
        }
        this.onClickTrolley = this.onClickTrolley.bind(this);
        this.onClickBuy = this.onClickBuy.bind(this);
    }

    onClickTrolley() {
        console.log("onClickTrolley")
    }

    onClickBuy() {
        window.location.href = "#/buy"
    }

    render() {
        console.log(this.state.goodsList);
        return (
            <div>
                <div style={{textAlign: 'center', position: 'fixed', top: 0, height: 25, width: '100%',
                background: 'lightgrey', lineHeight: '25px', zIndex: 100}}>
                    友情提示:满￥100包邮,每种商品最多购买24份
                </div>
                <div style={{height: 25}}></div>
                {
                    this.state.goodsList.map(function (md) {
                        return(
                            <GoodsCell goods={md} key={md.key}/>
                        );
                    }, this)
                }
                <div style={{height: 50}}></div>
                <BackTop style={{ bottom: 100 }}>
                    <div style={backTop}>UP</div>
                </BackTop>
                <div style={{position: 'fixed', bottom: 0, height: 50, width: '100%', background: 'lightgrey'}}>
                    <CustomButton title="购物车" className="trolley home_btn" onClick={this.onClickTrolley}/>
                    <CustomButton title="立即购买" className="buy home_btn" onClick={this.onClickBuy}/>
                </div>
            </div>
        );
    }

};

module.exports = GoodsList;