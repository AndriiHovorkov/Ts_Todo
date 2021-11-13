import React, { FC } from 'react';
import './App.css';
import { Todos } from './components/Todos/Todos';
import { Cards } from './components/Cards/Cards';

const App: FC = () => (
  <div>
    <Todos />
    <Cards />
  </div>
);
export default App;
