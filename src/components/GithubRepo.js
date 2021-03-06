import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./design.css";
import GithubRepoOutput from "./GithubRepoOutput";
import github from "./images/github.png";

const GithubRepo = () => {
  const repoName = useRef();

  const [userName, setUserName] = useState();
  const [repoOutput, setRepoOutput] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        setRepoOutput(res.data);
      })
      .catch((error) => {
        alert(`Invalid username name: ${userName}`);
      });
  }, [userName]);

  const onSubmitHandler = () => {
    console.log(repoName);
    setUserName(repoName.current.value);
  };



  return (
    <>
      <div className="flex-center mb-3">
        <img src={github} className="github-logo" alt="github-logo" />
        <span className="fs-3 fw-bold">Enter your Github Profile Name:</span>
        <input
          ref={repoName}
          type="text"
          className="form-control input-width input-caret"
          placeholder="https://github.com/kanagu555"
        />
      </div>
      <div className="btn-center">
        <button
          onClick={onSubmitHandler}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Submit
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Clear
        </button>
      </div>

      <GithubRepoOutput repoList={repoOutput} />
    </>
  );
};

export default GithubRepo;
