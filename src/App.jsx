import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { currentTodo, items } from 'reduxTodo/selectors';

export const App = () => {
  const todos = useSelector(items);
  const changeTodo = useSelector(currentTodo);

  return (
    <>
      <Header />

      <Section>
        <Container>
          {!changeTodo ? <Form /> : <EditForm />}

          <Filter />
          <TodoList />
          {todos.length < 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
