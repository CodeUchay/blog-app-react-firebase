import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { FaTrashAlt } from "react-icons/fa";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    let unsubscribe;
    const getPosts = async () => {
      try {
        // check if there is a cached version of the data in local storage
        const cachedPostLists = localStorage.getItem("postLists");
        if (cachedPostLists) {
          setPostList(JSON.parse(cachedPostLists));
        }

        // get the latest data and create a snapshot listener for real-time updates
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
          setPostList(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();

    return () => {
      // unsubscribe from the real-time snapshot listener
      unsubscribe && unsubscribe();
    };
  }, []);

  useEffect(() => {
    // save the latest data to local storage
    localStorage.setItem("postLists", JSON.stringify(postLists));
  }, [postLists]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            {post.author && (
              <div class="author-info">
                <img src={post.author.photoURL} alt=""></img>
                <h3>@{post.author.name}</h3>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
