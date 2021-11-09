import React, {FC} from 'react';
import './App.css';
import {ActionCard }from './component/Card/ActionCard';
import { TodoComponent } from './component/TodoCopmonent/TodoComponent/ContecstCopm';

const App: FC = () =>{
  return (
    <div>
      <TodoComponent/>
      <ActionCard/>
    </div>
  );
}

export default App;