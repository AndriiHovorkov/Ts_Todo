import React, {FC} from 'react';
import './App.css';
import ActionCard from './component/Card/ActionCard';
import TodoCopmonent from './component/TodoCopmonent/TodoCopmonent/ContecstCopm';


const App: FC = () =>{
    return (
      <div>
          <TodoCopmonent/>
          <ActionCard/>
      </div>
        
    );
}

export default App;
