import React from "react";
import { UserProps } from "../../interfaces";

interface Props {
    user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
        <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
        <p className="text-gray-700">@{user.username}</p>
        <p className="text-gray-500">{user.email}</p>

        <div className="mt-2">
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm text-gray-600">
                {user.address.suite}, 
                {user.address.street}, 
                {user.address.city}
            </p>
        </div>

        <div className="mt-2">
            <h3 className="font-semibold">Company</h3>
            <p className="text-sm italic">
                {user.company.catchPhrase}
            </p>
        </div>

        <p className="mt-2 text-sm text-gray-600">📞 {user.phone}</p>
        <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 block"
        >
            🌐 {user.website}
        </a>
        </div>
    );
};

export default UserCard;
