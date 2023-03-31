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
            <Keysboard />
        </>

    );
};

export default Login;