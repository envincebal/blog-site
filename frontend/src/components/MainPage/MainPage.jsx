import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import ComposePage from "../ComposePage/ComposePage";
import EditPage from "../EditPage/EditPage";
import PostEntry from "../PostEntry/PostEntry";
import PostView from "../PostView/PostView";

import "./MainPage.css";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios("http://localhost:8080").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  const deletePost = (e, postId) => {
    e.preventDefault();

    axios.delete("http://localhost:8080/delete/" + postId).then((res) => {
      console.log(res);
    });

    setPosts(posts.filter((item) => item._id !== postId));
  };

  const newerPage = () => setCurrentPage((page) => (page -= 1));

  const previousPage = () => setCurrentPage((page) => (page += 1));

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => {
              const itemsPerPage = 3;
              const lastPage = Math.ceil(posts.length / itemsPerPage);
              const indexOfLastPost = currentPage * itemsPerPage;
              const indexOfFirstPost = indexOfLastPost - itemsPerPage;
              const currentPosts = posts.slice(
                indexOfFirstPost,
                indexOfLastPost
              );

              const renderPosts = currentPosts.map((post) => (
                <PostEntry
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  content={post.content}
                  date={post.date}
                  deletePost={(e) => deletePost(e, post._id)}
                />
              ));
              return (
                <div>
                  <div className="entries-container">{renderPosts}</div>
                  <div className="page-buttons">
                    {posts.length > 3 && (
                      <div>
                        <button
                          type="submit"
                          className="btn btn-outline-info newer-posts-button newer-posts"
                          onClick={newerPage}
                          disabled={currentPage === 1}
                        >
                          Newer
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-info older-posts-button older-posts"
                          onClick={previousPage}
                          disabled={currentPage === lastPage}
                        >
                          Previous
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <Route exact path="/compose" component={ComposePage} />
          <Route exact path="/posts/:id" component={PostView} />
          <Route exact path="/edit/:id" component={EditPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
