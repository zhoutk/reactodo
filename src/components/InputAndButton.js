/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {Button, Input,Row,Col} from "antd";

class InputAndButton extends Component {

    focus = () => {
        this.el.focus();
    };

    addItem = e => {
        console.log(this.el.refs.input.value)
        if(e.which === 13 || e.type === 'click'){
            if(this.el.refs.input.value) {
                this.props.onSave({text: this.el.refs.input.value});
                this.el.refs.input.value = '';
            }
            this.el.focus();
        }
    }

    render = () => {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Input  ref={(el)=>this.el = el} size="large" placeholder="enter name"  onPressEnter={this.addItem.bind(this)}  />
                    </Col>
                    <Col span={4}>
                        <Button onClick={this.addItem.bind(this)} type="primary">Add</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InputAndButton;
