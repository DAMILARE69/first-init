import { useNavigate } from "react-router-dom";
import { AUTHENTICATIONPAGE } from "./AuthenticationStyles";

export default function Login() {
  const goTo = useNavigate();
  return (
    <AUTHENTICATIONPAGE transitionType="inout">
      <h1>Login</h1>
      <button onClick={() => goTo("/forgot-password")}>
        go to forgot-password
      </button>
    </AUTHENTICATIONPAGE>
  );
}
