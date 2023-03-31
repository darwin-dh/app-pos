import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import FormLogin from './Components/FormLogin'
import KeyBoard from './Components/KeyBoard'
const LoginCover = () => {
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="g-0">
                                        <FormLogin />
                                        <KeyBoard />
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        </React.Fragment>
    )
}

export default LoginCover