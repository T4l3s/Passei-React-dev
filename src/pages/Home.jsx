import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/");
    setTimeout(signOut, 1000);
  };

  return (
    <div>
      <button onClick={navLogin}>Logout</button>
    </div>
  );
};
