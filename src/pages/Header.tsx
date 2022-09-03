import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';


export default function Header() {
  
  return (
    <Grid item justifyContent="center" sx={{ mt: 0 }} >
      <Link href='/home' style={{ textDecoration: 'none' }}>
        <img
          id="image"
          alt='ikeaWall'
          src='http://cdn.rubelli.com/A23019_001/23019_1.420c.jpg' />
          <Typography id="text"
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            sx={{ color: "#4a4a4a" }}
          >
            .Elba.
          </Typography>
        </Link>
      </Grid>
  );
}
