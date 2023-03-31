import React from 'react'
import { Link } from 'react-router-dom'
import { Label, Input, Col, Button } from 'reactstrap'
const FormLogin = () => {
    return (
        <Col lg={6}>
            <div className="p-lg-5 p-4">
                <div>
                    <h5 className="text-primary">Logo</h5>
                </div>

                <div className="mt-4">
                    <form action="/">

                        <div className="mb-3">
                            <Label htmlFor="username" className="form-label">Usuario</Label>
                            <Input type="text" className="form-control" id="username" />
                        </div>

                        <div className="mb-3">
                            <Label className="form-label" htmlFor="password-input">Contraseña</Label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                                <Input type="password" className="form-control pe-5 password-input" id="password-input" />
                            </div>
                        </div>


                        <div className="mt-4">
                            <Link  to='/' className="btn btn-info w-100" type="submit">Iniciar Sección</Link>
                        </div>
                    </form>
                </div>
            </div>
        </Col>
    )
}

export default FormLogin