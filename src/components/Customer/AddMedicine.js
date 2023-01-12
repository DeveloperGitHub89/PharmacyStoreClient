import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveMedicineImage } from "../../actions/MedicineActions";

export function AddMedicine() {
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({});
    const [image,setImage]=useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(image);
        const formImageData=new FormData();
        formImageData.append('file',image);
        dispatch(saveMedicineImage(formImageData,'63ad79930b0601ba92a08e26'));
    }
    const handleFileChane=(e)=>{
        setImage(e.target.files[0]);
        
    }
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>Add a new Product</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" name="qty" placeholder="Quantity" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Price" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturing Date</Form.Label>
                                <Form.Control type="date" name="mfgOn" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control type="date" name="expiryDate" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" name="image" onChange={handleFileChane} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <input type='submit' value='Add Medicine' className="btn btn-success"></input>
                </Form>
            </Container>
        </>
    );
}