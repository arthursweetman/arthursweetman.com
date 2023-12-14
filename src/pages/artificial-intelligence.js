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
    const [scriptResult, setScriptResult] = React.useState('');
    const [inputData, setInputData] = React.useState('');

    const MarkdownComponent = ({text}) => {
        return (
            <div className='markdown-container'>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        );
    }

    const sendDataToServer = async ({}) => {
        try {
            const response = await fetch('http://localhost:5000/api/send-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: inputData,
            });

            const data = await response.json();
            console.log(data);
            setScriptResult(data.result)
        } catch (error) {
            console.error('Error sending data to server:', error);
            setScriptResult(error)
        }
    };
      
    
    return(
        <>
            <h1>
                This is my homepage to display all my projects related to machine learning and artificial intelligence.
            </h1>
            <MarkdownComponent text={scriptResult} />
            <TextField 
                label="Gemini"
                size="large"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <Button onClick={sendDataToServer}>
                Send query to Gemini
            </Button>
        </>
    );
}