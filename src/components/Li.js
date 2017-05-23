/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {Button,Popconfirm,message} from "antd";

class Li extends Component {
    delete = () => {

    };

    confirm(e) {
        console.log(e);
        this.props.onDel({id:this.props.id,text:this.props.text})
    }

    cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    render =() => {
        return (
            <div>
                {this.props.text}
                <Popconfirm title="确认删除当前信息吗？" okText="确认" cancelText="取消" onConfirm={this.confirm.bind(this)} onCancel={this.cancel.bind(this)}>
                    <Button  onClick={this.delete.bind(this)} size="small" type="danger">Delete</Button>
                </Popconfirm>
            </div>
        );
    }
};

export default Li;
