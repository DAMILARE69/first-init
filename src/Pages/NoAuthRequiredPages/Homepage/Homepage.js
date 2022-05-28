import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "./HomepageStyles";

export default function Homepage() {
  const goTo = useNavigate();
  return (
    <HOMEPAGE transitionType="inout">
      <h1>Home</h1>
      <button onClick={() => goTo("/sign-up")}>go to Sign up</button>
    </HOMEPAGE>
  );
}
