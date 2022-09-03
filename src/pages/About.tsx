import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, createTheme, CssBaseline, ImageList, ImageListItem, ThemeProvider } from '@mui/material';
import Header from './Header';

const fishSrc = require("../images/Fish.jpg?w=242&h=242&fit=crop&auto=format");
const fishSrcSet = require("../images/Fish.jpg?w=242&h=242&fit=crop&auto=format&dpr=2 2x");

const athensSrc = require("../images/Athens.jpg?w=242&h=242&fit=crop&auto=format");
const athensSrcSet = require("../images/Athens.jpg?w=242&h=242&fit=crop&auto=format&dpr=2 2x");

const brightonSrc = require("../images/Brighton.jpg?w=242&h=242&fit=crop&auto=format");
const brightonSrcSet = require("../images/Brighton.jpg?w=242&h=242&fit=crop&auto=format&dpr=2 2x");

const catalinasSrc = require("../images/Catalinas.jpg?w=242&h=242&fit=crop&auto=format");
const catalinasSrcSet = require("../images/Catalinas.jpg?w=242&h=242&fit=crop&auto=format&dpr=2 2x");

export default function About() {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="sm">
      <Header />
      <main>
          <Grid container justifyContent="center" spacing={2} sx={{ mt: 3 }} xs={12} md={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
      <ImageList
      sx={{ width: 800, height: 550 }}
      variant="quilted"
      cols={8}
      rowHeight={121}
    >
      <ImageListItem key="fish" cols={4} rows={4}>
          <img
            src={fishSrc}
            srcSet={fishSrcSet}
            alt={"Fish"}
            loading="lazy"
          />
      </ImageListItem>
      <ImageListItem key="athens" cols={4} rows={3}>
          <img
            src={athensSrc}
            srcSet={athensSrcSet}
            alt={"Athens"}
            loading="lazy"
          />
      </ImageListItem>
      <ImageListItem key="catalinas" cols={4} rows={4}>
          <img
            src={catalinasSrc}
            srcSet={catalinasSrcSet}
            alt={"Catalinas"}
            loading="lazy"
          />
      </ImageListItem>
      <ImageListItem key="brighton" cols={4} rows={3}>
          <img
            src={brightonSrc}
            srcSet={brightonSrcSet}
            alt={"Brighton"}
            loading="lazy"
          />
      </ImageListItem>
    </ImageList>
      </Paper>
                </Grid>
        </main>
    </Container>
    </ThemeProvider>
  );
}
