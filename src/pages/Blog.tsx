import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";
import Post from "./Post";

const theme = createTheme();

export default function Blog() {
  const queryParams = new URLSearchParams(window.location.search);
  const post = queryParams.get("post");

  const getPostName = () => {
    if (post) {
      return `${post}.md`;
    }
    return "home.md";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <main>
          <Grid container justifyContent="center" spacing={2} sx={{ mt: 0 }}>
            <Post blog_path={getPostName()} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
