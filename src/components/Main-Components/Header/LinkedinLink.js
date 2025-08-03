/* eslint-disable */
import { useHistory } from "react-router-dom";

function LinkedinLink() {
  const history = useHistory();

  function handleClick() {
    history.push("/linkedin");
  }

  return (
    <li><a onClick={handleClick} href="#">Linkedin Services</a></li>
  );
  
}



export default LinkedinLink