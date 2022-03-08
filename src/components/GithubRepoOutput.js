import React from "react";

const GitgubRepoOutput = ({ repoList }) => {
  const repoMap = repoList?.map((repo) => {
    return (
      <tbody>
        <tr>
          <td>{repo.name}</td>
          <td>{repo.language}</td>
          <td>{repo.description}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="table-center">
      <table className="table table-margin-center">
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Language</th>
            <th>Description</th>
          </tr>
        </thead>
        {repoMap}
      </table>
    </div>
  );
};

export default GitgubRepoOutput;
