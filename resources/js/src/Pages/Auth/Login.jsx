import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';

import { Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";




import Keysboard from '../../Components/Keysboard'
const Login = (props) => {
    const logoLight = "https://files.logoscdn.com/v1/files/44811985/content.svg?signature=yCSOkj6FQ0aABNCXOh2LskQULa4"
    const [userLogin, setUserLogin] = useState([]);
    const [error, setError] = useState();

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@gmail.com" || '',
            password: userLogin.password || "1234" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.history));
        }
    });

    return (

        <>
        {/*     <div className="auth-page-content">
                <Container>

                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="mt-4 shadow-lg rounded-xl border-6" >
                                <CardBody className="p-4">
                                    <div className="text-center mt-2">
                                        <img src={logoLight} />
                                    </div>
                                    {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
                                    <div className="p-2 mt-4">
                                        <Form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                            action="#">

                                            <div className="mb-3">
                                                <Label htmlFor="email" className="form-label">Email</Label>
                                                <Input
                                                    name="email"
                                                    className="form-control shadow-lg rounded-pill"
                                                    placeholder="Enter email"
                                                    type="email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ""}
                                                    invalid={
                                                        validation.touched.email && validation.errors.email ? true : false
                                                    }
                                                />
                                                {validation.touched.email && validation.errors.email ? (
                                                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-3">
                                                <div className="float-end">
                                                    <Link to="/forgot-password" className="text-muted">Olvidaste tu contraseña?</Link>
                                                </div>
                                                <Label className="form-label" htmlFor="password-input">Password</Label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <Input
                                                        name="password"
                                                        value={validation.values.password || ""}
                                                        type="password"
                                                        className="form-control pe-5 shadow-lg rounded-pill"
                                                        placeholder="******"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                    ) : null}
                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i className="mdi mdi-eye-outline fs-4 align-middle"></i></button>
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <Label className="form-check-label" htmlFor="auth-remember-check">Recordar me</Label>
                                            </div>

                                            <div className="mt-4">
                                                <Button className="btn  w-100 shadow-lg rounded-pill btn-blue" type="submit">Iniciar sesión</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div> */}
            <Keysboard />
        </>

    );
};

export default Login;