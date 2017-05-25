/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';

import { Button, Form, Input, message } from 'antd';

const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import styles from './LoginDumb.less';

function noop() {
    return false;
}

 class Login extends Component {


    constructor(pros) {
        super(pros);
    }


     componentWillMount(){
         this.setState({
             height: document.body.clientHeight
         });
     }


     componentDidMount(){
         // 监听window窗口变化,自动调整左侧菜单的高度
         window.addEventListener('resize', this._autoHeigth.bind(this));
     }

     componentWillUnmount(){
         // 组件注销时,移除window的resize事件监听,释放浏览器内存
         window.removeEventListener('resize',this._autoHeigth.bind(this));
     }

     // 自动获取浏览器可视区域高度
     _autoHeigth(){
         this.setState({
             height: document.body.clientHeight
         });
     }

     handleSubmitLogin(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.userName !='admin' || values.password !='123456' ){
                    this.setState({ iconLoading: false });
                    message.error('登录账号错误,请重新登录!(admin,123456)');
                }else{
                    this.setState({ iconLoading: true });
                    // message.success('登录成功，正在跳转')
                    this.props.onSubmitForm(values);
                    // hashHistory.push('/app');
                }
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        var documentHeight = this.state.height - 64;

        return(
            <div className={styles.loginBg} style={{minHeight: documentHeight}}>
                <div className={styles.login_header}>

                    <div className={styles.login_header_nav}>

                        <h1 className='pull-left'>
                        </h1>
                        <div className="pull-right">
                            <ul className="my-nav">
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.login_content}>

                    <section className={styles.login_form}>

                        <div className={styles.login_title}>
                            <h2 style={{fontSize: '18px', color: '#666666'}}>欢迎登录管理平台</h2>

                        </div>

                        <div className={styles.login_input}>
                            <Form onSubmit={this.handleSubmitLogin.bind(this)} layout="horizontal"
                                  className="login-form">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{required: true, message: '请输入用户名！'}],
                                    })(
                                        <Input type="text" placeholder="账户" style={{height: 38}}/>)}
                                </FormItem>

                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: '请输入密码！'}],
                                    })(
                                        <Input type="password"
                                               autoComplete="off"
                                               placeholder="密码"
                                               style={{height: 38}}
                                               onContextMenu={noop}
                                               onPaste={noop}
                                               onCopy={noop}
                                               onCut={noop}
                                        />)}
                                </FormItem>

                                <FormItem>
                                    <Button type="primary" size="large" loading={this.state.iconLoading} style={{width: "100%"}} htmlType="submit">登录</Button>
                                </FormItem>

                            </Form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Login = Form.create()(Login);

export default Login;