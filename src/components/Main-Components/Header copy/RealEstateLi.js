import { useHistory } from "react-router-dom";

function RealEstateLi() {
  const history = useHistory();

  function handleClick() {
    history.push("/realEstate");
  }

  return (
    <li><a onClick={handleClick} href="#">Real Estate</a></li>
  );
  
}



export default RealEstateLi