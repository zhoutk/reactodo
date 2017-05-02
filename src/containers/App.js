import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';
import * as TodoActions from '../actions';

class App extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };
    componentDidMount (){
        this.InputComponent.focus();
    };
    render() {
        return (
            <div>
                <InputAndButton ref={comp => { this.InputComponent = comp; }} onSave={this.props.actions.addTodo}/>
                <LiList items={this.props.todos}/>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    todos: state.todos.items
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
