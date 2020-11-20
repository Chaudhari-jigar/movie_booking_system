import React from 'react';

const renderData = (list) => {
    list.map((list,index)=>{
        <li key={index+1}>{list.name}</li>
    })
}

const StudentList = (props) => {
    return (
        <>
            <ul>
                {renderData(props.list)}
            </ul>  
        </>
    )
}


export default StudentList;