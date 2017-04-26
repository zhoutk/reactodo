/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoLi} from '../styled/Todo';

class Li extends Component {
    render() {
        return (
            <TodoLi>{this.props.text}</TodoLi>
        );
    }
}

export default Li;
