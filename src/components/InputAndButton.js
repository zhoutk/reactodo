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
                <Input  ref={(el)=>this.el = el} size="large" placeholder="enter name"  onPressEnter={this.addItem.bind(this)}  />
                <Button onClick={this.addItem.bind(this)} type="primary">Add</Button>
            </div>
        );
    }
}

export default InputAndButton;
