import React, {FC} from 'react';
import './App.css';
import ActionCard from './Card/ActionCard';
import UseContecstCopm from './ContextComponent/UseContext/useContecstCopm';


const App: FC = () =>{
    return (
      <div>
          <UseContecstCopm/>
          <ActionCard/>
          
      </div>
        
    );
}

export default App;
