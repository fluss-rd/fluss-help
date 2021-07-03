import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ElementCard from "../components/ElementCard";
import SearchBar from "../components/SearchBar";
import { getSortedPostsData } from "../lib/posts";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PageTitle from "../components/PageTitle";
import Post from "../models/Post";
import { Grid, Typography } from "@material-ui/core";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const filtered = posts.filter((post) =>
    normalize(post.title + " " + post.description).includes(normalize(keyword))
  );

  const goToPost = (id: any) => {
    return () => router.push(`/support/${id}`);
  };

  const onKeywordChange = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  return (
    <div>
      <PageTitle>Ayuda a usuarios</PageTitle>
      <br />
      <SearchBar
        placeholder="Busca lo que quires hacer"
        onChange={onKeywordChange}
      />
      <br />
      <br />
      <Grid container spacing={3}>
        {filtered.map(({ id, title, description, imageUrl }) => (
          <Grid item xs={12} key={id}>
            <ElementCard
              title={title}
              onClick={goToPost(id)}
              description={description}
              imageUrl={imageUrl}
            />
          </Grid>
        ))}
        {!filtered?.length && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <Typography color="textSecondary">
              Los sentimos, no se encontraron resultados de la búsqueda
            </Typography>
          </div>
        )}
      </Grid>
    </div>
  );
};

function normalize(text: string): string {
  const normalized = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  return normalized;
}

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

