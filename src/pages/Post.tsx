import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect } from "react";
import Markdown from "./MarkdownPost";

export default function Post({ blog_path }: { blog_path: string }) {
  const [post, setPost] = React.useState("");

  useEffect(() => {
    import(`../blogs/${blog_path}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        "& .markdown": {
          py: 3,
          textAlign: "left",
        },
      }}
    >
      <Markdown className="markdown" key={post.substring(0, 40)}>
        {post}
      </Markdown>
    </Grid>
  );
}
