import { useEffect } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicines } from "../../actions/MedicineActions";

export function MedicinesList() {

    const medicines = useSelector(state => state.medicineReducer);
    console.log(medicines);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMedicines());
    }, []);

    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>List of available medicines</Alert>
            </Container>
            <Container>
                <Row>
                    {
                        medicines.map((medicine) => {
                            return (
                                <>
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{medicine.name}</Card.Title>
                                                <Card.Text>
                                                    <h2>&#8377;{medicine.price}</h2>
                                                    <Button variant="success" className="btn-sm">Add to cart</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>

            </Container>
        </>
    );
}