import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddTask.css";
function AddTask() {
  return (
    <div className="addtask-container">
      <Form className="addtask-container-form">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleTask">Task</Label>
              <Input
                id="exampleTask"
                name="task"
                placeholder="AddTask"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDate">Day & Time</Label>
              <Input
                id="exampleDate"
                name="date"
                placeholder="add Day & time"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign in</Button>
      </Form>
    </div>
  );
}

export default AddTask;
