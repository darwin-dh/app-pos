import React, { useState } from 'react'
import { Col, Row, Button, Container } from 'reactstrap'
import ComponetKeyBoard from '../../../Components/KeyBoard/KeyBoard'
const KeyBoard = () => {
    const [showKeyBoard, setShowKeyBoard] = useState(false)
    const KeysBoards = [
        { key: '1', type: 'number' },
        { key: '2', type: 'number' },
        { key: '3', type: 'number' },
        { key: '4', type: 'number' },
        { key: '5', type: 'number' },
        { key: '6', type: 'number' },
        { key: '7', type: 'number' },
        { key: '8', type: 'number' },
        { key: '9', type: 'number' },
        { key: '0', type: 'number' },
    ]
    const captureKeys = (item) => {
        console.log("first", item.key)
    }
    return (
        <>

            <Col lg={6} className='border-start border-2'>
                <div className="p-lg-5 p-4">

                    <Container >
                        <Row>
                            <Col lg={8}>
                                <Row >
                                    {KeysBoards.slice(0, 3).map((item, key) => (
                                        <Col key={key}>
                                            <Button onClick={() => captureKeys(item)} color='dark' outline className='py-3 px-4 border-1 shadow-lg rounded border'><span className='fs-4 fw-bold'>{item.key}</span></Button>
                                        </Col>
                                    ))}
                                </Row>
                                <Row className='my-1 py-2'>
                                    {KeysBoards.slice(3, 6).map((item, key) => (
                                        <Col key={key}>
                                            <Button onClick={() => captureKeys(item)} color='dark' outline className='py-3 px-4 border-1 shadow-lg rounded border'><span className='fs-4 fw-bold'>{item.key}</span>
                                            </Button>
                                        </Col>
                                    ))}
                                </Row>
                                <Row className='my-1 py-2'>
                                    {KeysBoards.slice(6, 9).map((item, key) => (
                                        <Col key={key}>
                                            <Button onClick={() => captureKeys(item)}
                                                color='dark' outline className='py-3 px-4 border-1 shadow-lg rounded border'><span className='fs-4 fw-bold'>{item.key}</span></Button></Col>
                                    ))}
                                </Row>
                                <Row className='my-1 py-2'>
                                    <Row>
                                        <Col lg={4} sm={4}>
                                            <Button onClick={() => captureKeys(KeysBoards[9])} color='dark' outline className='py-3 px-4 border-1 shadow-lg rounded border'><span className='fs-4 fw-bold'>{KeysBoards[9].key}</span></Button>
                                        </Col>
                                        <Col lg={8} sm={7}>
                                            <Button color='danger' className='py-3 px-4 border-1 shadow-lg rounded border w-100 '><span className='fs-4 fw-bold'>Borrar</span></Button>

                                        </Col>
                                    </Row>
                                </Row>
                                <Row>

                                    <Button block color='info' onClick={() => setShowKeyBoard(!showKeyBoard)}>
                                        Teclado
                                    </Button>

                                </Row>
                            </Col>
                            <Col lg={4}>
                                <Button className='h-100 w-75 mt-sm-2 w-sm-100'><span className='fw-bold fs-3'>Enter</span></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Col>
         
                <ComponetKeyBoard showKeyBoard={showKeyBoard} />
         

        </>
    )
}

export default KeyBoard