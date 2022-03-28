import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddTask.css";
function AddTask({handleForm,handleFormArray,form}) {
  // console.log(handleForm);
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
                onChange={handleForm}
                value={form.task}
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
                onChange={handleForm}
                value={form.date}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleFormArray}>Add</Button>
      </Form>
    </div>
  );
}

export default AddTask;
