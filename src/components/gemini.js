import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { CardActionArea, Collapse, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../pages/Markdown.css';

const githubLinks = {
    'gemini': 'https://github.com/arthursweetman/speak-to-gemini',
    'shakespeare': 'https://github.com/arthursweetman/transformer'
}

export default function Gemini() {
    const [geminiText, setGeminiText] = React.useState('');
    const [inputData, setInputData] = React.useState('');
    const [geminiIsLoading, setGeminiIsLoading] = React.useState(false);

    const backendAPI = 'https://arthursweetman-com-backend-g6am4zwx5a-uc.a.run.app'

    const MarkdownComponent = ({text}) => {
        return (
            <div className='markdown-container'>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        );
    }

    const tileStyle = {
        border: '2px solid #888', // Light-gray border
        padding: '15px', // Optional padding for better aesthetics
        borderRadius: '10px', // Optional border-radius for rounded corners
        boxSizing: 'border-box', /* Include this for consistent sizing */
        height: '600px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
    };

    const inputStyle = {
        marginTop: 10,
        margin: '0 auto', // Center the container
    }

    const speak_to_gemini = async () => {
        try {
            setGeminiIsLoading(true); // Show loading indicator
            const response = await fetch(backendAPI+'/api/to-gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: inputData,
            });

            const data = await response.json();
            console.log(data);
            setGeminiText(data.result);

        } catch (error) {
            console.error('Error sending data to server:', error);
            setGeminiText('Error sending data to server:', error);
        } finally {
            setGeminiIsLoading(false); // Hide loading indicator
        }
    };

    return(
        <>
            <MarkdownComponent text={geminiText} />
            <Container style={inputStyle}>
                <TextField 
                    label="Speak to Gemini..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    fullWidth
                />
                {!geminiIsLoading && <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={speak_to_gemini}
                >
                    Send query to Gemini
                </Button>}
                {geminiIsLoading && <CircularProgress size={24} color="secondary"/>}
                <Link href={githubLinks['gemini']} style={{margin:10}}>See Code in GitHub</Link>
            </Container>
        </>

    )
}