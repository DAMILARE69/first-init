import { useNavigate } from "react-router-dom";
import { AUTHENTICATIONPAGE } from "./AuthenticationStyles";
import { MMinimalHeader } from "magical-components";
export default function Signup() {
  const goTo = useNavigate();
  return (
    <AUTHENTICATIONPAGE transitionType="inout">
      <MMinimalHeader></MMinimalHeader>
      <h1>Signup</h1>
      <button onClick={() => goTo("/login")}>go to login</button>
    </AUTHENTICATIONPAGE>
  );
}
