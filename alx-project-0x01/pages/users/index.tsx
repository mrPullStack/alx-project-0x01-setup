import React from "react";
import UserCard from "../../components/common/UserCard";
import { UserProps } from "../../interfaces";

interface UsersPageProps {
    posts: UserProps[];
}

function Users({ posts }: UsersPageProps) {
        return (
            <div>
            <h1>Users</h1>
            {posts.map((user) => (
                <UserCard key={user.id} {...user} />
            ))}
            </div>
        );
}

export default Users;
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return {
        props: {users,},
    };
}


