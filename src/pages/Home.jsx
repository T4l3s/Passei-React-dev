import React from "react";
import { useSignOut } from "react-auth-kit";

export const Home = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  return (
    <div>
      teste
      <button onClick={signOut}>Logout</button>
    </div>
  );
};
