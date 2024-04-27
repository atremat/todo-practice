import { Section, Container, Header, Text, Form, TodoList } from 'components';
import { useSelector } from 'react-redux';
import { items } from 'reduxTodo/selectors';

export const App = () => {
  const todos = useSelector(items);
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Form />
          <TodoList />
          {todos.length < 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
