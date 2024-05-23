import React, {useState} from 'react';
import {TextField, Button, Typography, Card, Cardcontent} from '@mui/material';

function TextDisplayForm() {
    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState ('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        setDisplayedText(text);
    };

    return (
        <div style={{ padding: 20}}>
            <TextField
            label="Введите текст"
            variant="outlined"
            fullWidth
            value={text}
            onChange={handleChange}
            margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{marginBottom: 10}}>
                Отобразить текст
            </Button>
            {displayedText && (
                <Card elevation={4}>
                    <Cardcontent>
                        <Typography variant="h5" component="h2" style={{ wordWrap: "break-word"}}>
                            {displayedText}
                        </Typography>
                    </Cardcontent>
                </Card>
            )}
        </div>
    )
}

export default TextDisplayForm;