import * as React from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default function Todo() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}
