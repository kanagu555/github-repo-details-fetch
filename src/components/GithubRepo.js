import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./design.css";

const GitgubRepo = () => {
  const repoName = useRef();

  const [userName, setUserName] = useState();
  const [repoOutput, setRepoOutput] = useState();
  const [invalid, setInvalid] = useState();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(res => {
      setRepoOutput(res.data)
      .catch((err) => setInvalid(err))
    });
  }, [userName, invalid]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUserName(repoName.current.value);
    
  };

  return (
    <div>
       <form onSubmit={onSubmitHandler}>
        <div className="flex-center input-group mb-3">
          <span className="input-group-text">Enter Github Repo Name:</span>
          <input
            ref={repoName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="btn-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
        <div>
        <table className="table">

          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
              <th>Description</th>
            </tr>
          </thead>
          {repoOutput?.map((repo) => {
            return (
              <tbody key={repo.id}>
                <tr>
                  <td>{repo.name}</td>
                  <td>{repo.language}</td>
                  <td>{repo.description}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        
      </div>
      {invalid ? 'The requested Repo is not valid' : null}
      
    </div>
  );
};

export default GitgubRepo;
