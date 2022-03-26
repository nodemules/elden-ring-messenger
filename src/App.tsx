import React, {useState} from 'react';
import './App.css';
import {Button, ButtonGroup, Card, Container} from 'react-bootstrap';

const options = [

    "**** ahead",
    "Likely ****",
    "If only I had a ****...",
    "****, O ****",
    "Ahh, ****...",
    "No **** ahead",
    "First off, ****",
    "Didn't expect ****...",
    "Behold, ****!",
    "****",
    "**** required ahead",
    "Seek ****",
    "Visions of ****...",
    "Offer ****",
    "****!",
    "Be wary of ****",
    "Still no ****...",
    "Could this be a ****?",
    "Praise the ****	****?",
    "Try ****",
    "Why is it always ****?",
    "Time for ****",
    "Let there be ****",
    "****...",
]

const App = () => {
    const [message, setMessage] = useState<string>('');
    return (
        <Container>
            <h1>Elden Ring Message Generator</h1>
            <p>Here we will generate some Elden Ring messages</p>
            <div className="mb-3" style={{textAlign: 'center'}}>
                {message}
            </div>
            <div>
                <Card>
                    <Card.Header>Templates</Card.Header>
                    <Card.Body>
                        {
                            options.map(option => (
                                <Button
                                    className="m-1"
                                    onClick={() => setMessage(option)}
                                >
                                    {option}
                                </Button>
                            ))
                        }
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default App;
