import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ElementCard from "../components/ElementCard";
import SearchBar from "../components/SearchBar";
import { getSortedPostsData } from "../lib/posts";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PageTitle from "../components/PageTitle";
import Post from "../models/Post";
import { Grid } from "@material-ui/core";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const classes = useStyles();
  const router = useRouter();
  const goToPost = (id: any) => () => router.push(`/support/${id}`);

  return (
    <div>
      <PageTitle>Ayuda a usuarios</PageTitle>
      <br />
      <SearchBar placeholder="Busca lo que quires hacer" />
      <br />
      <br />
      <Grid container spacing={3}>
        {posts.map(({ id, title, description, imageUrl }) => (
          <Grid item xs={12} key={id}>
            <ElementCard
              title={title}
              onClick={goToPost(id)}
              description={description}
              imageUrl={imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
  },
  elements: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export async function getStaticProps() {
  const posts = getSortedPostsData();
  const data = { props: { posts } };

  return data;
}

export default Home;

