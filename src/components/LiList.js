/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoUl} from '../styled/Todo';
import Li from './Li';

class LiList extends Component {
    render() {
        return (
            <TodoUl>
                {this.props.items.map((item)=>{
                    return <Li {...item}></Li>;
                })}
            </TodoUl>
        );
    }
}

export default LiList;
