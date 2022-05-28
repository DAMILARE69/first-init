import { useNavigate } from "react-router-dom";
import { AUTHENTICATIONPAGE } from "./AuthenticationStyles";

export default function ForgotPassword() {
  const goTo = useNavigate();
  return (
    <AUTHENTICATIONPAGE transitionType="inout">
      <h1>forgot-password</h1>
      <button onClick={() => goTo("/")}>go to Home</button>
    </AUTHENTICATIONPAGE>
  );
}
