import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import ElementCard from "../components/ElementCard";
import SearchBar from "../components/SearchBar";
import { getSortedPostsData } from "../lib/posts";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface HomeProps {
  posts: any[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const classes = useStyles();
  const router = useRouter();
  const goToPost = (id: any) => () => router.push(`/support/${id}`);

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h4">Ayuda a usuarios</Typography>
      </div>
      <br />
      <SearchBar placeholder="Busca lo que quires hacer" />
      <br />
      <br />
      <div className={classes.elements}>
        {posts.map(({ id, title, description }) => (
          <ElementCard
            key={id}
            title={title}
            onClick={goToPost(id)}
            description={description}
          />
        ))}
      </div>
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

