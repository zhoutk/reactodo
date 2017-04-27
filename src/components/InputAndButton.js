/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoButton, TodoInput} from '../styled/Todo';

class InputAndButton extends Component {
    focus() {
        this.el.focus();
    }
    render() {
        return (
            <div>
                <TodoInput innerRef={el=> { this.el = el; }} onChange={this.props.onChange} onKeyUp={this.props.addItem} placeholder="enter task" value={this.props.inputValue}></TodoInput>
                <TodoButton onClick={this.props.addItem} type="submit">add</TodoButton>
            </div>
        );
    }
}

export default InputAndButton;
