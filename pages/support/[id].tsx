import { makeStyles } from "@material-ui/core/styles";
import { getAllPostIds, getPostData } from "../../lib/posts";
import React, { FC } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import Head from "next/head";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useRouter } from "next/router";
import PostData from "../../models/PostData";

interface PostProps {
  postData: PostData;
}

const Post: FC<PostProps> = ({ postData }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Paper className={classes.content}>
          <Button
            startIcon={<ChevronLeftIcon />}
            onClick={() => router.push("/")}
          >
            Volver a inicio
          </Button>
          <br />
          <br />
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {postData.title}
          </Typography>
          <div
            className={classes.contentHtml}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </Paper>
      </article>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  contentHtml: {
    fontSize: 16,
    "& img": {
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRadius: 10,
      maxWidth: "100%",
      boxShadow: "10px 10px 8px #e4e4e4",
    }
  },
  content: {
    padding: theme.spacing(3),
  },
}));

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;

