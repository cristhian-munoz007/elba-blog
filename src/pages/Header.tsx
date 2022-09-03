import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const sections = [
  { title: 'Getting to know AWS', url: '/blog?post=aws-fi' },
  { title: 'Interviewing in Costa Rica', url: '/blog?post=interviewing-in-costarica' },
  { title: 'About', url: '/about' }
];

export default function Header() {
  
  return (
    <React.Fragment>
      <div id='container'>
      <Link href='/home'>
      <img
      id="image"
      alt='ikeaWall'
      src='http://cdn.rubelli.com/A23019_001/23019_1.420c.jpg'
      ></img>
        <Typography id="text"
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: "#4a4a4a" }}
        >
          .Elba.
        </Typography>
        </Link>
      </div>
      {/*<Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="#7b1fa2"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
        </Toolbar>*/}
    </React.Fragment>
  );
}
