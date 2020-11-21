import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import StudentTasks from './StudentTasks';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={StudentTasks}/>
        {/* <Route path="/context" component={myContext}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;