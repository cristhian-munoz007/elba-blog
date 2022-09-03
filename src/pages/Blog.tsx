import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const theme = createTheme();

export default function Blog() {

  const queryParams = new URLSearchParams(window.location.search);
  const post = queryParams.get('post');

  const getPostName = () => {
    if (post) {
      return `${post}.md`;
    }
    return "home.md"
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <main>
          <Grid container justifyContent="center" spacing={2} sx={{ mt: 0 }} >
            <Main blog_path={getPostName()}/>
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
