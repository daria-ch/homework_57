import React from 'react';
import './Task.css';
import Delete from './Images/delete.png';

const Task = props => {
    return (
        <div className='task'>
            <span>{props.name}</span>
            <span>{props.cost} KGS</span>
            <img src={Delete} alt="#" onClick={props.remove}/>
        </div>
    );
};

export default Task;