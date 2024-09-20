import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoaddingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    // console.log("fetch started");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
        addInitialPost(data.post);
        setfetching(false);
        return () => {
          console.log("Clean up use effect.")
        }

        // console.log("fetch required");
      });
    // console.log("fetch ended")
  }, [])
  // const handleGetPostClick = () => {

  // }  
  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostClick} />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;