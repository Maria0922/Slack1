import React from 'react';

import './UsersList.css';
import UserItem from './UserItem';

const UsersList = (props) => {
    if(props.items.length === 0){
        return(
            <div className="center">
                <h2>No se han encontrado Usuarios!! </h2>
            </div>
        );
    }else {
        return(
            <ul className="users-list">
                {props.items.map(user => {
                    return(
                        <UserItem 
                            key={user.id}//cuestion interna
                            id={user.id}//cuestion de desarrollador 
                            image={user.image}
                            name={user.name}
                            placeCount={user.places}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default UsersList;