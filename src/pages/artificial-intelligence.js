import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Markdown.css';

export default function ArtificialIntelligence() {
    const [geminiText, setGeminiText] = React.useState('');
    const [inputData, setInputData] = React.useState('');

    const MarkdownComponent = ({text}) => {
        return (
            <div className='markdown-container'>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        );
    }

    const speak_to_gemini = async () => {
        try {
            const response = await fetch('https://gemini-g6am4zwx5a-uc.a.run.app/api/to-gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: inputData,
            });

            const data = await response.json();
            console.log(data);
            setGeminiText(data.result)
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };
      
    
    return(
        <>
            <h1>
                This is my homepage to display all my projects related to machine learning and artificial intelligence.
            </h1>
            <MarkdownComponent text={geminiText} />
            <Container>
                <TextField 
                    label="Speak to Gemini..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    fullWidth
                />
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={speak_to_gemini}
                >
                    Send query to Gemini
                </Button>
            </Container>
        </>
    );
}