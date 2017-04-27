/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoButton, TodoInput} from '../styled/Todo';

class InputAndButton extends Component {
    constructor(props)	{
        super(props);
        this.state={
            inputValue:''
        };
    }
    focus = () => {
        this.el.focus();
    };
    onChange = e => {
        this.setState({
            inputValue:e.target.value
        })
    };
    addItem = e => {
        if(e.which === 13 || e.type === 'click'){
            if(this.state.inputValue.trim().length > 0) {
                this.props.onSave(this.state.inputValue.trim());
                e.target.value = '';
                this.setState({
                    inputValue:''
                })
            }
            this.focus();
        }
    };
    render = () => {
        return (
            <div>
                <TodoInput innerRef={el=> { this.el = el; }}
                           onChange={this.onChange}
                           onKeyUp={this.addItem}
                           placeholder="enter task"
                           value={this.state.inputValue}>
                </TodoInput>
                <TodoButton onClick={this.addItem} type="submit">add</TodoButton>
            </div>
        );
    }
}

export default InputAndButton;
