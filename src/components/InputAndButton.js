/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoButton, TodoInput} from '../styled/Todo';

class InputAndButton extends Component {
    render() {
        return (
            <form>
                <TodoInput placeholder="enter task"/>
                <TodoButton type="submit">add</TodoButton>
            </form>
        );
    }
}

export default InputAndButton;
