import React from "react";
import Authenticate from "../components/authenticate";

const Login = () => {
  return (
    <div className="row">
      <Authenticate isLogin={true} />
    </div>
  );
};

export default Login;
