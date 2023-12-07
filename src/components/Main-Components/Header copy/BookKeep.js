import { useHistory } from "react-router-dom";

function BookKeep() {
  const history = useHistory();

  function handleClick() {
    history.push("/bookkeeping");
  }

  return (
    <li><a onClick={handleClick} href="#">Book Keeping Services</a></li>
  );
  
}



export default BookKeep