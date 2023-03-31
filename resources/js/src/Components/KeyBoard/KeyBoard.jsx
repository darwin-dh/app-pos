import Keyboard from 'react-simple-keyboard';
import { Container } from 'reactstrap'
import 'react-simple-keyboard/build/css/index.css';
import React, { useState, useRef } from 'react';
const KeyBoard = ({ showKeyBoard }) => {
    const getInputValue = inputName => {
        return inputs[inputName] || "";
    };
    const keyboard = useRef();
    return (


        <div>
            {showKeyBoard &&
                <Container className='mt-2 '>
                    <Keyboard
                        keyboardRef={r => (keyboard.current = r)}
                    /*        inputName={inputName}
                           layoutName={layoutName}
                           onChangeAll={onChangeAll}
                           onKeyPress={onKeyPress} */

                    />
                </Container>
            }

        </div>
    )
}

export default KeyBoard