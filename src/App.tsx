import React, {useState} from 'react';
import './App.css';
import {Button, Card, Container} from 'react-bootstrap';

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
    "Praise the ****",
    "****?",
    "Try ****",
    "Why is it always ****?",
    "Time for ****",
    "Let there be ****",
    "****...",
]

const dictionary = {
    'Enemies': [
        'enemy',
        'weak foe',
        'strong foe',
        'monster',
        'dragon',
        'boss',
        'sentry',
        'group',
        'pack',
        'decoy',
        'undead',
        'soldier',
        'knight',
        'cavalier',
        'archer',
        'sniper',
        'mage',
        'ordnance',
        'monarch',
        'lord',
        'demi-human',
        'outsider',
        'giant',
        'horse',
        'dog',
        'wolf',
        'rat',
        'beast',
        'bird',
        'raptor',
        'snake',
        'crab',
        'prawn',
        'octopus',
        'bug',
        'scarab',
        'slug',
        'wraith',
        'skeleton',
        'monstrosity',
        'ill-omened creature',
    ],
    'People': [
        'Tarnished',
        'warrior',
        'swordfighter',
        'knight',
        'samurai',
        'sorcerer',
        'cleric',
        'sage',
        'merchant',
        'teacher',
        'master',
        'friend',
        'lover',
        'old dear',
        'old codger',
        'angel',
        'fat coinpurse',
        'pauper',
        'good sort',
        'wicked sort',
        'plump sort',
        'skinny sort',
        'lovable sort',
        'pathetic sort',
        'strange sort',
        'numble sort',
        'laggardly sort',
        'invisible sort',
        'unfathomable sort',
        'giant sort',
        'sinner',
        'thief',
        'liar',
        'dastard',
        'traitor',
        'pair',
        'trio',
        'noble',
        'aristocrat',
        'hero',
        'champion',
        'monarch',
        'lord',
        'god',
    ],
    'Things': [
        'item',
        'necessary item',
        'precious item',
        'something',
        'something incredible',
        'treasure chest',
        'corpse',
        'coffin',
        'trap',
        'armament',
        'shield',
        'bow',
        'projectile weapon',
        'armor',
        'talisman',
        'skill',
        'sorcery',
        'incantation',
        'mao',
        'material',
        'flower',
        'grass',
        'tree',
        'fruit',
        'seed',
        'mushroom',
        'tear',
        'crystal',
        'butterfly',
        'bug',
        'dung',
        'grace',
        'door',
        'key',
        'ladder',
        'lever',
        'lift',
        'spiritspring',
        'sending gate',
        'stone astrolabe',
        'Birdseye Telescope',
        'message',
        'bloodstain',
        'Erdtree',
        'Elden Ring',
    ],
    'Battle Tactics': [],
    'Actions': [],
    'Situations': [],
    'Places': [],
    'Directions': [],
    'Body Parts': [],
    'Affinities': [],
    'Concepts': [],
    'Phrases': []
} as Record<Word, string[]>

type Word =
    'Enemies' |
    'People' |
    'Things' |
    'Battle Tactics' |
    'Actions' |
    'Situations' |
    'Places' |
    'Directions' |
    'Body Parts' |
    'Affinities' |
    'Concepts' |
    'Phrases'

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
                            options.map(option => (
                                <Button
                                    key={option}
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
