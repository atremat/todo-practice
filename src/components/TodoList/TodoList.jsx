import { Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { items } from 'reduxTodo/selectors';
export const TodoList = () => {
  const todos = useSelector(items);
  return (
    <>
      {todos.map((todo, idx) => (
        <Todo key={todo.id} index={idx + 1} text={todo.text} id={todo.id} />
      ))}
      {todos.length < 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
