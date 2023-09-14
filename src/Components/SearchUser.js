import React, { useState } from "react";
import "./searchuser.css";

function SearchUser({ setUserName, setShow }) {
  const [githubInfo, setGithubInfo] = useState();

  const handleChange = (e) => {
    setGithubInfo(e.target.value);
  };
  const handleSubmit = () => {
    setUserName(githubInfo);
    setShow(false);
  };
  return (
    <div className="searchuser">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="gitimg"
          className="rounded w-20 m-4"
        />
        <div className="text-3xl m-4">GitHub</div>
        <h1 className=" m-4">Please Enter a Valid Username</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          className="w-80 border-2 p-2 rounded-lg"
        />
        <div className="">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-80 bg-black text-white p-2.5 rounded-lg m-4 hidden:bg-gray-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
