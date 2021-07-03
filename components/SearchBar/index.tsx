import { CircularProgress, InputBase, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { FC, ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value as string;
    setValue(value);
    props.onChange(value);
  };

  return (
    <Paper className={classes.card}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon color="action" />
        </div>
        <InputBase
          placeholder={props.placeholder}
          onChange={handleChange}
          value={value}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "100%",
    height: `calc(${theme.mixins.toolbar.minHeight}px - 15px)`,
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default SearchBar;

