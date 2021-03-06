import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header'
import * as TodoActions from '../actions';

class App extends Component {

    render() {
        var {todos,actions} = this.props;
        return (
            <div>
                <div className="ant-layout">
                    {this.props.children}
                </div>
            </div>
        );
    };
}

App.propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    todos: state.get('todos').get('items')
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
