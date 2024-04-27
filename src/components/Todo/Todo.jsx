import { Text } from 'components';
import { GridItem } from 'components';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ index, text, id }) => {
  const dispatch = useDispatch();
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{index}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={() => dispatch(changeTodo({ id, text }))}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
