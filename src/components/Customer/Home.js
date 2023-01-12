import { Alert, Container } from "react-bootstrap";

export function Home() {
    return (
        <>
         <Container className="mt-5 text-center">
            <Alert>
                Welcome to online pharmacy store
            </Alert>
            <p>You can order medicines online</p>
         </Container>
        </>
    );
}