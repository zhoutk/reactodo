/**
 * Created by zhoutk on 17-4-18.
 */

import React from 'react';
import {TodoLi} from '../styled/Todo';

const Li = (props) => {
    return (
        <TodoLi>{props.text}</TodoLi>
    );
};

export default Li;
