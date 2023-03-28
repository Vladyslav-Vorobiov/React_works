import Container from "react-bootstrap/Container";

const Error = () => {
    return (
        <Container>
            <div className="text-center mt-5">
                <h1 className='mb-4'>Oops!</h1>
                <h6>Sorry, the requested page does not exist.</h6>
            </div>
        </Container>
    );
};

export default Error;