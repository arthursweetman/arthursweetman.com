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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Markdown.css';

const cards = ["linkedIn", "GitHub"]

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

const theme = createTheme({
    palette: {
      miami: {
        main: '#fff',
        light: '#C41230',
        dark: '#000',
        contrastText: '#C41230',
      },
      bh: {
        main: '#013025',
        light: '#fff',
        dark: '#013025',
        contrastText: '#02a783',
      },
    },
  });

export default function HomePage(){
    const colors = {
        'bh-dg': '#013025',
        'bh-lg': '#02a783',
        'miami-red':'#C41230'
    }

    return(
        <>
            <main class="home">
                <Box
                    sx={{
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
                            sx={{ pt: 1 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to='/artificial-intelligence'
                            >
                                See some of my AI prjects
                            </Button>
                        </Stack>
                    </Container>
                </Box>
                <Container>
                    <ThemeProvider theme={theme}>
                        <VerticalTimeline animate={true} lineColor='gray'>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: colors['bh-dg'], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  ' + colors['bh-dg'] }}
                                date="Aug 2023 - present"
                                dateClassName='text-black'
                                iconStyle={{ background: colors['bh-lg'], color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Data Scientist and Analytic Developer @ Baker Hughes</h3>
                                <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
                                <p>
                                    Python, Agile, Machine Learning, Client-first Development, Data Science, RM&D
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Jan 2023 - Aug 2023"
                                dateClassName='text-black'
                                iconStyle={{ background: colors['bh-lg'], color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Emissions Analyst @ Baker Hughes</h3>
                                <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
                                <p>
                                    Carbon emissions calculation, emissions modeling, PowerBI, emissions abatement, data analysis, project management
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July 2022 - Jan 2023"
                                dateClassName='text-black'
                                iconStyle={{ background: colors['bh-lg'], color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Embedded Software Engineer @ Baker Hughes</h3>
                                <h4 className="vertical-timeline-element-subtitle">Skaneateles, NY</h4>
                                <p>
                                    Voice Recognition Software, RM&D, RM&D Dashboard development
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: colors['miami-red'], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  '+colors['miami-red'] }}
                                date="2021 - 2022"
                                dateClassName='text-black'
                                iconStyle={{ background: "#aaa", color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Master's of Science in Statistics</h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami University</h4>
                                <h5 className="vertical-timeline-element-subtitle">Oxford, OH</h5>
                                <p>
                                    Statistical Theory, Machine Learning, Mathematical Statistics, Experimental Design, R
                                </p>
                                <Button 
                                    variant="contained" 
                                    color="miami" 
                                    href="https://www.linkedin.com/in/arthur-sweetman/overlay/education/612650766/multiple-media-viewer?profileId=ACoAACpYTJcBoETcUBbm9M4tNTMGPen0B5A41EU&treasuryMediaId=1635526719432&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSW%2BZ9ytaSSGoXwi411zEvQ%3D%3D">
                                        Thesis
                                </Button>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: colors['bh-lg'], color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  ' + colors['bh-lg'] }}
                                date="Summer 2021"
                                dateClassName='text-black'
                                iconStyle={{ background: colors['bh-dg'], color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">IT Internship @ Baker Hughes</h3>
                                <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
                                <p>
                                    Agile Development, Database Management
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2018 - 2022"
                                dateClassName='text-black'
                                iconStyle={{ background: colors['miami-red'], color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Bachelor's of Science in Data Science</h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami University</h4>
                                <h5 className="vertical-timeline-element-subtitle">Oxford, OH</h5>
                                <p>
                                    Data Science, R, Machine Learning, Database Management, Python, Statistical Modeling
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </ThemeProvider>
                </Container>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4} justifyContent="center">
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