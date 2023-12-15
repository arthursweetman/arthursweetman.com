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
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

const cards = ["Gemini","linkedIn", "GitHub", "BakerHughes"]

const cardInfo = {
    "Gemini": {
        "header": "Gemini",
        "content": "Interact with my app integrating Google's LLM Gemini",
        "link": "/artificial-intelligence",
        "image": "https://lh3.googleusercontent.com/ey9Pvhmj3IqklZuRTiz2EeADv6flN-gYNOgAKO3x7jguUWsIYnzbmKG_DtxemRWelKR6nmBrGj1g_79ksrf-vrDvCTr1z3CtpHQC1cVL3-7652BDAw=w2592-rw"
    },
    "linkedIn": {
        "header": "LinkedIn",
        "content": "View my experience, education, and connect with me on LinkedIn",
        "link": "https://www.linkedin.com/in/arthur-sweetman/",
        "image": "https://source.unsplash.com/random?wallpapers"
    },
    "GitHub": {
        "header": "GitHub",
        "content": "View the source code for all my personal projects, including this website!",
        "link": "https://github.com/arthursweetman",
        "image": "https://avatars.githubusercontent.com/u/56804555?v=4"
    },
    "BakerHughes": {
        "header": "BakerHughes",
        "content": "My current employer - Baker Hughes, an energy technology company",
        "link": "https://www.bakerhughes.com/",
        "image": "https://www.bakerhughes.com/themes/custom/bh/dist/images/logo.png"
    },
}


export default function HomePage(){
    return(
        <>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            About Me
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Data Scientist and Statistician with interests in Machine Learning and Artificial Intelligence, automation, outer space, and beer brewing.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Imma make this button do something at a later point</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    // image="https://source.unsplash.com/random?wallpapers"
                                    image={cardInfo[card]['image']}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {cardInfo[card]['header']}
                                    </Typography>
                                    <Typography>
                                        {cardInfo[card]['content']}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small"
                                        component={RouterLink}
                                        to={cardInfo[card]['link']}
                                    >
                                        {"Go to "+card}
                                    </Button>
                                </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
}