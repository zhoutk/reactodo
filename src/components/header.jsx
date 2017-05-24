/**
 * Created by lijie on 16/7/7.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Dropdown } from 'antd';

import styles from './header.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const adminPanle = (

    <Menu>
        <Menu.Item key="0">

            <a target="_blank">修改密码</a>
        </Menu.Item>
        <Menu.Item key="1">

            <Link to="/login">

               退出

            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>全局通知（不可用）</Menu.Item>
    </Menu>
);



export default class Header extends React.Component {


    constructor(props) {
        super(props);

        this.state ={
            current:'video'
        };


    }


    handleClick(e) {

        this.setState({
            current: e.key
        });
    }

    render() {

        return(

            <div className="ant-layout-top">
                <div className={styles.header}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.logo}>
                            <img src="./assets/images/logo.png" height="40px" alt=""/>
                        </div>
                        <Menu theme="dark"
                              mode="horizontal"
                              onClick={this.handleClick.bind(this)}

                              selectedKeys={[this.state.current]}
                              defaultSelectedKeys={['video']} style={{lineHeight: '64px',float:'left'}}>


                            <Menu.Item key="video">
                                <Link to="/app/video">
                                    <Icon type="video" />
                                    表格示例
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="application">
                                <Link to="/app/application">
                                    <Icon type="application" />
                                    表单组件
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="chart">

                                <Link to="/app/chart">

                                    <Icon type="tubiao" />
                                    整合Echarts

                                </Link>

                            </Menu.Item>

                            <Menu.Item key="portal">
                                <Link to="/app/portal">
                                    <Icon type="menhuguanli" />
                                    404访问

                                </Link>
                            </Menu.Item>


                            <Menu.Item key="user">
                                <Link to="/app/redux">
                                    <Icon type="yonghuguanli" />

                                        Redux示例1

                                </Link>
                            </Menu.Item>


                            <Menu.Item key="system">
                                <Link to="/app/system">
                                    <Icon type="setting" />

                                    其他页面
                                </Link>
                            </Menu.Item>

                        </Menu>

                        <div className={styles.userInfo}>
                            <Dropdown overlay={adminPanle}>
                                <a className="ant-dropdown-link">
                                    admin <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>


                    </div>
                </div>
            </div>


        )
    }

}
