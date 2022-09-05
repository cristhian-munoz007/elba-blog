import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1', color: "#4a4a4a" , fontSize: "16px" }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
        sx: { color: "#4a4a4a" }
      },
    },
    h2: {
      component: Typography,
      props: { 
        gutterBottom: true, variant: 'h5', component: 'h2' , sx: { color: "#4a4a4a", fontWeight: 'bold' }},
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', sx: { color: "#4a4a4a", fontWeight: 'bold'} },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'subtitle',
        paragraph: true,
        sx: { color: "#9b4dca", fontWeight: "bold" }
      },
    },
    p: {
      component: Typography,
      props: { 
        sx: { 
          color: "#4a4a4a" ,
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "1.4"
        }, 
        paragraph: true },
    },
    a: { 
      component: Link ,
      props: {
        color: "#9b4dca"
      }
    },
    li: {
      component: MarkdownListItem,
      props: {
        color: "#4a4a4a" ,
        fontSize: "16px",
      }
    },
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
