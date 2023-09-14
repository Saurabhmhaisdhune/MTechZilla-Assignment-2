import React, { useState } from "react";
import SearchUser from "../Components/SearchUser";
import UserInfo from "../Components/UserInfo";

function Home() {
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <SearchUser setShow={setShow} setUserName={setUserName} />
      ) : (
        <UserInfo userName={userName} />
      )}
    </div>
  );
}

export default Home;
