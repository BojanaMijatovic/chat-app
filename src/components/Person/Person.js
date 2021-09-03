import React from 'react';
import image from '../../assets/user-1.png'

const Person = (props) => {

    return (
        <div id={props.id} className={"person" + (props.selected ? ' active' : '' )} onClick={props.selectChat}>
            <div  className="person__avatar">
                <img src={image} alt="users avatar"/>
            </div>
            <p className="person__name">{props.name}</p>
        </div>
    )
}

export default Person;