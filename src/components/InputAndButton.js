/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {Button, Input} from "antd";

class InputAndButton extends Component {
    focus = () => {
        this.el.focus();
    };
    addItem = e => {
        if(e.which === 13 || e.type === 'click'){
            if(e.target.value || this.el.value) {
                this.props.onSave({text: e.target.value || this.el.value});
                e.target.value = '';
                this.el.value = '';
            }
            this.focus();
        }
    };
    render = () => {
        return (
            <div>
                <Input ref={el=> { this.el = el; }} size="large" placeholder="enter name" />
                <Button onClick={this.addItem} type="primary">Add</Button>
            </div>
        );
    }
}

export default InputAndButton;
