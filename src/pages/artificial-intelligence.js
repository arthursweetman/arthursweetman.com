import * as React from 'react';
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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ArtificialIntelligence() {
    const [scriptResult, setScriptResult] = React.useState('');

    const runPythonScript = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/run-script');
            const data = await response.json();
            console.log(data)
            setScriptResult(data.result);
        } catch (error) {
            console.error('Error running Python script:', error);
        }
    };
      
    
    return(
        <>
            <h1>
                This is my homepage to display all my projects related to machine learning and artificial intelligence.
            </h1>
            <Button onClick={runPythonScript}>
                Run Python Script
            </Button>
            <Typography>
                Script Result: {scriptResult}
            </Typography>
        </>
    );
}