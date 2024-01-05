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


const githubLinks = {
    'gemini': 'https://github.com/arthursweetman/speak-to-gemini',
    'shakespeare': 'https://github.com/arthursweetman/transformer'
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

const backendAPI = 'https://arthursweetman-com-backend-g6am4zwx5a-uc.a.run.app'

export default function Shakespeare(){
    const [shakespeareText, setShakespeareText] = React.useState('');
    const [shakespeareIsLoading, setShakespeareIsLoading] = React.useState(false);

    
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
                <Link href={githubLinks['shakespeare']} style={{margin:10}}>See Code in GitHub</Link>
            </Container>
        </>
    )
}