import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import ComposePage from "../ComposePage/ComposePage";
import EditPage from "../EditPage/EditPage";
import PostEntry from "../PostEntry/PostEntry";

import "./MainPage.css";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  useEffect(() => {
    axios("http://localhost:8080").then((res) => {
      setPosts(res.data.posts);
      setCurrentPage(res.data.currentPage);
      setTotalItems(res.data.totalItems);
      setLastPage(res.data.lastPage);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <div className="entries-container">
                    {posts.map((post) => (
                      <PostEntry
                        key={post._id}
                        title={post.title}
                        content={post.content}
                        date={post.date}
                      />
                    ))}
                  </div>

                  <div className="page-buttons">
                    {totalItems > 3 ? (
                      currentPage !== 1 ? (
                        <a
                          href={`/?page=${currentPage - 1}`}
                          className="newer-posts"
                        >
                          <button
                            type="submit"
                            className="btn btn-outline-info newer-posts-button"
                          >
                            Newer
                          </button>
                        </a>
                      ) : (
                        <a
                          href={`/?page=${currentPage - 1}`}
                          className="newer-posts"
                        >
                          <button
                            type="submit"
                            className="btn btn-outline-info newer-posts-button"
                            disabled
                          >
                            Newer
                          </button>
                        </a>
                      )
                    ) : currentPage !== lastPage ? (
                      <a
                        href={`/?page=${currentPage + 1}`}
                        className="older-posts"
                      >
                        <button
                          type="submit"
                          className="btn btn-outline-info older-posts-button"
                        >
                          Previous
                        </button>
                      </a>
                    ) : (
                      <a
                        href={`/?page=${currentPage + 1}`}
                        className="older-posts"
                      >
                        <button
                          type="submit"
                          className="btn btn-outline-info older-posts-button"
                          disabled
                        >
                          Previous
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <Route exact path="/compose" component={ComposePage} />
          <Route exact path="/edit" component={EditPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
