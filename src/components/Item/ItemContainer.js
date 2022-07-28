import {connect} from 'react-redux';
import Item from './Item';
// import { changeTodoState, trashTodo } from '../../state/modules/app';

export const trashTodo = payload => {
  return {
    type: 'TRASH_TODO',
    payload: payload,
  };
};

export const changeTodoState = payload => {
  return {
    type: 'CHANGE_TODO',
    payload: payload,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    changeTodoState: id => {
      dispatch(changeTodoState(id));
    },
    trashTodo: id => {
      dispatch(trashTodo(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Item);
