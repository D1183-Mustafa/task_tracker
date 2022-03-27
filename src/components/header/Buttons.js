import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.css"

function Buttons({handleBtn}) {
  return (
    <div className="btn">
      <h2>Task Tracker</h2>
      <Button color="primary" onClick={handleBtn} id="btn">
        Show Add Task Bar
      </Button>
    </div>
  );
}

export default Buttons;
