import React, { useState, useRef } from "react";
import {
    Card,
    CardBody,
    Col,
    Container,
    Input,
    Label,
    Row,
    Button,
    Form,
    FormFeedback,
    Alert,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./index.css";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
const Keysboard = () => {
    const [userLogin, setUserLogin] = useState([]);
    const [error, setError] = useState();

    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const keyboard = useRef();

    const onChangeAll = (inputs) => {
        /**
         * Here we spread the inputs into a new object
         * If we modify the same object, react will not trigger a re-render
         */
        setInputs({ ...inputs });
        console.log("Inputs changed", inputs);
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onKeyPress = (button) => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = (event) => {
        const inputVal = event.target.value;

        setInputs({
            ...inputs,
            [inputName]: inputVal,
        });

        keyboard.current.setInput(inputVal);
    };

    const getInputValue = (inputName) => {
        return inputs[inputName] || "";
    };
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@gmail.com" || "",
            password: userLogin.password || "1234" || "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.history));
        },
    });
    const logoLight =
        "https://files.logoscdn.com/v1/files/44811985/content.svg?signature=yCSOkj6FQ0aABNCXOh2LskQULa4";
    return (
        <div className="App">
            {/*          <input
                id="firstName"
                value={getInputValue("firstName")}
                onFocus={() => setInputName("firstName")}
                placeholder={"First Name"}
                onChange={onChangeInput}
            /> */}
            <div className="auth-page-content">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="mt-4 shadow-lg rounded-xl border-6">
                                <CardBody className="p-4">
                                    <div className="text-center mt-2">
                                        <img src={logoLight} />
                                    </div>
                                    {error && error ? (
                                        <Alert color="danger"> {error} </Alert>
                                    ) : null}
                                    <div className="p-2 mt-4">
                                        <Form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                            action="#"
                                        >
                                            <div className="mb-3">
                                                <Label
                                                    htmlFor="email"
                                                    className="form-label"
                                                >
                                                    Usuario
                                                </Label>
                                                <Input
                                                    name="email"
                                                    className="form-control shadow-lg "
                                                    type="email"
                                                    value={getInputValue(
                                                        "firstName"
                                                    )}
                                                    onFocus={() =>
                                                        setInputName(
                                                            "firstName"
                                                        )
                                                    }
                                                    onChange={onChangeInput}
                                                    /*             onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.email || ""}
                                                            invalid={
                                                                validation.touched.email && validation.errors.email ? true : false
                                                            } */
                                                />
                                                {validation.touched.email &&
                                                validation.errors.email ? (
                                                    <FormFeedback type="invalid">
                                                        {
                                                            validation.errors
                                                                .email
                                                        }
                                                    </FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-3">
                                                <Label
                                                    className="form-label"
                                                    htmlFor="password-input"
                                                >
                                                    Contraseña
                                                </Label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <Input
                                                        name="password"
                                                        /*                 value={validation.values.password || ""} */
                                                        type="password"
                                                        className="form-control pe-5 shadow-lg "
                                                        placeholder="******"
                                                        value={getInputValue(
                                                            "lastName"
                                                        )}
                                                        onFocus={() =>
                                                            setInputName(
                                                                "lastName"
                                                            )
                                                        }
                                                        onChange={onChangeInput}
                                                        /*                onChange={validation.handleChange}
                                                                   onBlur={validation.handleBlur}
                                                                   invalid={
                                                                       validation.touched.password && validation.errors.password ? true : false
                                                                   } */
                                                    />
                                                    {validation.touched
                                                        .password &&
                                                    validation.errors
                                                        .password ? (
                                                        <FormFeedback type="invalid">
                                                            {
                                                                validation
                                                                    .errors
                                                                    .password
                                                            }
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <Input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="auth-remember-check"
                                                />
                                                <Label
                                                    className="form-check-label"
                                                    htmlFor="auth-remember-check"
                                                >
                                                    Recordar me
                                                </Label>
                                            </div>

                                            <div className="mt-4">
                                                <Link
                                                    to="/LoginCover"
                                                    className="btn btn-info w-100 shadow-lg  btn-blue"
                                                    type="submit"
                                                >
                                                    Iniciar sesión
                                                </Link>
                                            </div>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*      <input
                id="lastName"
                value={getInputValue("lastName")}
                onFocus={() => setInputName("lastName")}
                placeholder={"Last Name"}
                onChange={onChangeInput}
            /> */}

            <div className="see-keyboard">
                <Keyboard
                    keyboardRef={(r) => (keyboard.current = r)}
                    inputName={inputName}
                    layoutName={layoutName}
                    onChangeAll={onChangeAll}
                    onKeyPress={onKeyPress}
                />
            </div>
        </div>
    );
};
export default Keysboard;
