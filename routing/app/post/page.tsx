// pages/posts.js

'use client'

import { Suspense, useState, useEffect } from 'react';

const fetchPosts = () => {
  return new Promise<{ id: number; title: string; }[]>((resolve) => {
    setTimeout(() => {
      const mockPosts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
      ];
      resolve(mockPosts);
    }, 3000); // Simulate a 3-second delay
  });
};

const Posts = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; }[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section>
      <h1>Posts Page</h1>
      <Suspense fallback={<p>Loading feed haha...</p>}>
        <PostFeed posts={posts} />
      </Suspense>
    </section>
  );
};

export default Posts;

const PostFeed = ({ posts }: { posts: { id: number; title: string; }[] }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
