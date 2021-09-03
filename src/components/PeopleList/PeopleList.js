import React from 'react';
import Person from "../Person/Person";

const PeopleList = (props) => {
    const users = props.users;

    const people = users.map((user) =>
        <Person
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            selected={user.selected}
            user={user}
            selectChat={props.selectChat}
            filterMessages={props.filterMessages}
        />
    )

    return (
        <div className="people-list chat-layout__people">
            <div className="people-list__wrapper">
                <h2>Friends List</h2>
                {people}
            </div>
        </div>
    )
}

export default PeopleList;