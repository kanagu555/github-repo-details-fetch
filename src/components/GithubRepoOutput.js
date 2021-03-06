import React from "react";

const GitgubRepoOutput = ({ repoList }) => {
  const repoMap = repoList?.map((repo) => {
    return (
      <tbody key={repo.id}>
        <tr>
          <td>{repo.name}</td>
          <td>{repo.language}</td>
          <td>{repo.description}</td>
        </tr>
      </tbody>
    );
  });
  console.log(repoList);
  return (
    <div className="table-center">
      <table className="table table-margin-center">
        {repoList?.length ? (
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
              <th>Description</th>
            </tr>
          </thead>
        ): null }
        {repoMap}
      </table>
    </div>
  );
};

export default GitgubRepoOutput;
