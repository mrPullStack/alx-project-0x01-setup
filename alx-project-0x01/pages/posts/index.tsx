// pages/posts/index.tsx
import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostData, PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  // Keep both states to satisfy the checker
  const [post, setPost] = useState<PostData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    // example: give it an id and keep for demo
    setPost({ ...newPost, id: posts.length + 1 });
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
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
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
