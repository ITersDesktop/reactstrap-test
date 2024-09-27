import {Button, Container, Col, Row} from "reactstrap";

function BootstrapGridTest() {
    return (
        <Row><Col>
            <h1>Fluid Grid!</h1>
            <p>
                This is a modified fluid which
                stretches the whole horizontal space.
            </p>
            <Button color="primary">
                Submit
            </Button>
            <Button color="danger">Danger!</Button>
        </Col></Row>
    );
}

export  default BootstrapGridTest;