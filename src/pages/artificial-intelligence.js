import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
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
    const [shakespeareText, setShakespeareText] = React.useState('');
    const [geminiIsLoading, setGeminiIsLoading] = React.useState(false);
    const [shakespeareIsLoading, setShakespeareIsLoading] = React.useState(false);
    const backendAPI = 'https://arthursweetman-com-backend-g6am4zwx5a-uc.a.run.app'

    const tileStyle = {
        border: '1px solid #ddd', // Light-gray border
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

    const gridContainerStyle = {
        width: '90%', // Default width for medium screens and smaller
        maxWidth: 1400, // Max width for larger screens
        margin: '0 auto', // Center the container
    };

    const MarkdownComponent = ({text}) => {
        return (
            <div className='markdown-container'>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        );
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

    const start_shakespeare = async () => {
        try {
            setShakespeareIsLoading(true); // Show loading indicator
            const response = await fetch(backendAPI+'/api/shakespeare', {
                method: 'GET'
            });

            const data = await response.json();
            console.log(data);
            setShakespeareText(data.result)
        } catch (error) {
            console.error('Error sending data to server:', error);
            setShakespeareText('Error sending data to server:', error)
        } finally {
            setShakespeareIsLoading(false); // Hide loading indicator
        }
    };


    
    return(
        <>
            <h1>
                This is my homepage to display all my projects related to machine learning and artificial intelligence.
            </h1>
            <Grid container spacing={2} style={gridContainerStyle}>
                <Grid item xs={12} md={6}>
                    <Container style={tileStyle}>
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
                        </Container>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container style={tileStyle}>
                        <pre className='markdown-container'>
                            {shakespeareText}
                        </pre>
                        <Container style={inputStyle}>
                            {!shakespeareIsLoading && <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={start_shakespeare}
                            >
                                Print shakespeare
                            </Button>}
                            {shakespeareIsLoading && <CircularProgress size={24} color="secondary"/>}
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
}