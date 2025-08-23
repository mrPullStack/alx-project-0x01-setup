import React from "react";
import UserCard from "../../components/common/UserCard";
import { UserProps } from "../../interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
            <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            />
        ))}
        </div>
    );
    };

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return {
        props: {users,},
    };
}

export default UsersPage;
