import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

export interface PostData {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    const [post, setPost] = useState<PostData | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = (post: PostData) => {
        setPost(post);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setPost(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col h-screen">
        <Header />
        <main className="p-4">
            <div className="flex justify-between">
            <h1 className=" text-2xl font-semibold">Post Content</h1>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-700 px-4 py-2 rounded-full text-white"
            >
                Add Post
            </button>
            </div>
            <div className="grid grid-cols-3 gap-2 ">
            {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
                <PostCard
                title={title}
                body={body}
                userId={userId}
                id={id}
                key={key}
                onClick={() => handleOpenModal({ title, body, userId, id })}
                />
            ))}
            </div>
        </main>

        {isModalOpen && (
            <PostModal post={post} onClose={handleCloseModal} />
        )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
        posts,
        },
    };
}

export default Posts;
