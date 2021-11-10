import {FC} from 'react';
import './App.css';
import {Card }from './components/Card/Card';
import {TodoComponent} from './components/Todo/Todo';

const App: FC = () =>{
  return (
    <div>
      <TodoComponent/>
      <Card/>
    </div>
  );
}
export default App;