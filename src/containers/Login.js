import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  LoginDumb from '../components/login/LoginDumb'
import * as TodoActions from '../actions';
import { message } from 'antd';

class Login extends Component {



    handleSubmitForm(e){
        message.error('*********************');
    }

    render() {
        var {todos,actions} = this.props;
        return (
            <div>
                <LoginDumb onSubmitForm={this.handleSubmitForm.bind(this)}></LoginDumb>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    todos: state.get('todos').get('items')
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
