import {connect} from 'react-redux';
import AddForm from './AddForm';

export const addTodo = payload => {
  return {
    type: 'ADD_TODO',
    payload: payload,
  };
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
