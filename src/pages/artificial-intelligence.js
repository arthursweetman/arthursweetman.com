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
import './Markdown.css';
import Shakespeare from '../components/shakespeare';
import Gemini from '../components/gemini';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function ArtificialIntelligence() {
    const cards = ['Shakespeare','Gemini']
    const [expandedShak, setExpandedShak] = React.useState(false);
    const [expandedGem, setExpandedGem] = React.useState(false);
    
    const handleExpandClick = (card) => {
        if(card == "Shakespeare"){
            setExpandedShak(!expandedShak);
        } else if(card == "Gemini") {
            setExpandedGem(!expandedGem);
        }
    };

    const expanded = {
        'Shakespeare': expandedShak,
        'Gemini': expandedGem
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

    const gridContainerStyle = {
        width: '90%', // Default width for medium screens and smaller
        maxWidth: 1400, // Max width for larger screens
        margin: '10px auto', // Center the container
    };

    const cardContent = {
        "Shakespeare":{
            "text": "Expand this card to see my LLM created from scratch using the Transformer (decoder-only) architecture. This was trained on the works of Shakespeare and can generate infinite Shakespeare-like text. The LLM does a great job of producing similar word rhythms and sentence structures that we see in Shakespeare's original works.",
            "link": "https://github.com/arthursweetman/transformer"
        },
        "Gemini":{
            "text": "Expand this to send single queries to Google's Bard and view it's response.",
            "link": "https://github.com/arthursweetman/speak-to-gemini"
        }
    }
    return(
        <>
            <h1>
                View some of my projects related to artificial intelligence here
            </h1>
            <h4>(All of my projects can be seen on my GitHub)</h4>
            <Grid container spacing={2} style={gridContainerStyle}>
                {cards.map( (card) => (
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    {cardContent[card].text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    variant='contained'
                                    href={cardContent[card].link}    
                                >
                                    See code in Github
                                </Button>
                                <ExpandMore 
                                    expand={expanded[card]}
                                    onClick={() => handleExpandClick(card)}
                                    aria-expanded={expanded[card]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[card]} timeout="auto" unmountOnExit>
                                {card=="Shakespeare" && <Shakespeare />}
                                {card=="Gemini" && <Gemini />}
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <h4>
                Future projects for me include fine-tuning existing LLMs (like LLaMA) for project purposes and scaling up my current model and training on bigger and better data.
            </h4>
        </>
    );
}