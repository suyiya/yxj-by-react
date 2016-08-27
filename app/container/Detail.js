/**
 * Created by SUYIYA on 16/8/14.
 */

import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { BackTop, Row, Col, Checkbox, Icon, Input, Carousel } from 'antd';
import CustomButton from '../components/CustomButton';

class Detail extends  Component {
    constructor() {
        super();
        this.onClickBack = this.onClickBack.bind(this);
        this.onClickTrolley = this.onClickTrolley.bind(this);
        this.onClickBuy = this.onClickBuy.bind(this);
    }

    onClickBack() {
        window.location.href = "#/goodsList"
    }

    onClickTrolley() {
        console.log("加入购物车")
    }

    onClickBuy() {
        window.location.href = "#/buy"
    }

    render() {
        return(
            <div>
                <Carousel autoplay>
                    <div style={{height: 60}}>
                        <img src={require("../../images/cloth_0.jpg")} style={{width: 100}}/>
                    </div>
                    <div>
                        <img src={require("../../images/cloth_1.jpg")} style={{width: 100}}/>
                    </div>
                    <div>
                        <img src={require("../../images/cloth_2.jpg")} style={{width: 100}}/>
                    </div>
                    <div>
                        <img src={require("../../images/cloth_3.jpg")} style={{width: 100}}/>
                    </div>
                </Carousel>
                <div style={{padding: 10}}>
                    <p style={{fontSize: 18}}>
                        折叠防水旅行包女手提行李大容量行李袋短途旅行袋游泳包健身男
                    </p>
                    <p style={{color: 'orange', fontSize: 14}}>￥45.00</p>
                    <Col span={12}>
                        <p>快递:江浙沪包邮</p>
                    </Col>
                    <Col span={12}>
                        <p>已售: 10000件</p>
                    </Col>
                </div>
                <div style={{position: 'fixed', bottom: 0, height: 50, width: '100%', background: 'lightgrey'}}>
                    <CustomButton className="home" onClick={this.onClickBack}>
                        <Icon type="home" />
                    </CustomButton>
                    <CustomButton title="加入购物车" className="trolley detail_btn" onClick={this.onClickTrolley}/>
                    <CustomButton title="立即购买" className="buy detail_btn" onClick={this.onClickBuy}/>
                </div>
            </div>
        );
    }
};

module.exports = Detail;