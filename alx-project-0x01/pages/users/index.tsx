// pages/users/index.tsx
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

interface UsersProps {
  users: UserData[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [userList, setUserList] = useState<UserData[]>(users);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUserList((prev) => [user, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add User
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userList.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserData[] = await res.json();
  return { props: { users } };
};

export default Users;
