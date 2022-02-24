import React from 'react';

export function Users() {
    return (
        <div>
            <UsersTitle/>
            <UsersName/>
        </div>
    );
}

function UsersTitle() {
    return <div><h3>Пользователи</h3></div>
}

function UsersName() {
    return (
        <div>
            <ul>
                <li>Юля</li>
                <li>Андрей</li>
                <li>Владислав</li>
            </ul>
        </div>
    );
}