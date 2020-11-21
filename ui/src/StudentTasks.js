import React from 'react';
import { Switch, Route } from 'react-router'
import StudentList from './components/All Form/studentList';
import StudentAdd from './components/All Form/addForm';
import StudentEdit from './components/All Form/editForm';
import Header from './components/common/Header';
const StudentTasks = (props) => {
    return <>
        <Header />
        <div>
            <Switch>
                <Route path="/student" exact component={StudentList}/>
                <Route path="/studentAdd" exact component={StudentAdd}/>
                <Route path="/studentEdit/:id" exact component={StudentEdit}/>
            </Switch>
        </div>
    </>
}

export default StudentTasks