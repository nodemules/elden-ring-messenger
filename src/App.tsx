import React, {useState} from 'react';
import './App.css';
import {Button, Card, Container} from 'react-bootstrap';
import data from './data.json';
import {Word} from './Word';

const {dictionary, templates} = data

const App = () => {
    const [message, setMessage] = useState<string>('');
    const [word, setWord] = useState<Word>();
    const [option, setOption] = useState<string>('')
    return (
        <Container>
            <h1>Elden Ring Message Generator</h1>
            <p>Here we will generate some Elden Ring messages</p>
            <div className="mb-3" style={{textAlign: 'center'}}>
                {
                    option ? message.replace('****', option) : message
                }
            </div>
            <div className="mb-1">
                <Card className="bg-secondary">
                    <Card.Header>Templates</Card.Header>
                    <Card.Body>
                        {
                            templates.map(template => (
                                <Button
                                    key={template}
                                    className="m-1"
                                    onClick={() => setMessage(template)}
                                >
                                    {template}
                                </Button>
                            ))
                        }
                    </Card.Body>
                </Card>
            </div>
            {
                message.length ?
                    <div className="mb-1">
                        <Card className="bg-secondary">
                            <Card.Header>Words</Card.Header>
                            <Card.Body>
                                {
                                    Object.keys(dictionary).map(word => (
                                        <Button
                                            key={word}
                                            className="m-1"
                                            onClick={() => setWord(word as Word)}
                                        >
                                            {word}
                                        </Button>
                                    ))
                                }
                            </Card.Body>
                        </Card>
                    </div>
                    :
                    <></>
            }
            {
                word ?
                    <div className="mb-1">
                        <Card className="bg-secondary">
                            <Card.Header>{word}</Card.Header>
                            <Card.Body>
                                {
                                    dictionary[word].map(option => (
                                        <Button
                                            key={option}
                                            className="m-1"
                                            onClick={() => setOption(option)}
                                        >
                                            {option}
                                        </Button>
                                    ))
                                }
                            </Card.Body>
                        </Card>
                    </div>
                    :
                    <></>
            }
        </Container>
    );
}

export default App;
