import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Username: {username}</p>
        <p className="text-gray-600">Email: {email}</p>
        <small className="text-gray-400">ID: {id}</small>
        </div>
    );
};

export default UserCard;
