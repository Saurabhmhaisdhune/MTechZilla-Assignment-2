import React, { useEffect, useState } from "react";
import axios from "axios";
import "./userinfo.css";
import { ImSpinner4 } from "react-icons/im";
import { AiOutlineUser,AiOutlineCalendar } from "react-icons/ai";
import { RiGitRepositoryCommitsLine} from "react-icons/ri";
import { LuFolderGit} from "react-icons/lu";

function UserInfo({ userName }) {
  const [userdata, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setUserData(response.data))
      .catch((err) => {
        alert("Invalid userName");
      });
  }, [userName]);

  // Conditional rendering to check if userdata is defined

  if (!userdata) {
    return (
      <div className="loader">
      <div className="w-80 p-5 text-3xl bg-black text-white rounded-lg flex items-center justify-center gap-4">
        <ImSpinner4 className=" text-white" />
        <div>Loading ...</div>
      </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="gitimg"
          className="rounded w-11 m-1"
        />
        <h1 className="text-black text-2xl ">GitHub</h1>
      </nav>
      <main>
        <div className="main-1">
          <img
            src={userdata.avatar_url}
            alt="imgs"
            className="rounded-full object-contain m-2"
            id="pro-pic"
          />
          <h1 className="text-2xl font-bold">{userdata.login}</h1>
        </div>
        <div className="main-2 text-2xl">
          <ul>
            <li>
              <AiOutlineUser/>Full Name : <strong>{userdata.name}</strong>
            </li>
            <li>
             <RiGitRepositoryCommitsLine/> Total Public Repository : <strong>{userdata.public_repos}</strong>
            </li>
            <li>
              <LuFolderGit/>Total Public Gists : <strong>{userdata.public_gists}</strong>
            </li>
            <li>
              <AiOutlineCalendar/>Account Creation Date : <strong>{userdata.created_at}</strong>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default UserInfo;
