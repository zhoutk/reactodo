import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';
import * as TodoActions from '../actions';

const App = ({todos, actions}) => (
    <div>
        <InputAndButton onSave={actions.addTodo}/>
        <LiList items={todos}/>
    </div>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
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
