import React, { FC } from 'react';
import './App.css';
import { Todo } from './components/Todo/Todo';
import { Cards } from './components/Card/Cards';

const App: FC = () => (
  <div>
    <Todo />
    <Cards />
  </div>
);
export default App;
