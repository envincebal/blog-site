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
  useEffect(() => {
    axios("http://localhost:8080").then((res) => setPosts(res.data.posts));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="entries-container">
                  {console.log(posts)}
                  {posts.map((post, i) => (
                    <PostEntry
                      key={i}
                      title={post.title}
                      content={post.content}
                      date={post.date}
                    />
                  ))}
                </div>
              );
            }}
          />
          <Route exact path="/compose" component={ComposePage} />
          <Route exact path="/edit" component={EditPage} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default MainPage;
