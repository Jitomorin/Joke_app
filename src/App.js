import "./App.scss";
import illustration from "./assets/illustration.png";
import { getJokes } from "./API/functions";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  Button,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckBox } from "@mui/icons-material";
import { Box } from "@mui/system";

//HELP
//will struggle with the filtering functionality
//but i can handle it 

const SideDrawer = ({ dialogClose, dialogOpen, open }) => {
  // const fullscreen = useMediaQuery(theme.breakpoints.down("md"));
  const categories = [
    { name: "Programming", show: true },
    { name: "Miscellaneous", show: true },
    { name: "Dark", show: true },
    { name: "Pun", show: true },
    { name: "Spooky", show: true },
    { name: "Christmas", show: true },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={dialogClose}>
      <Box>
        <List>
          <ListItem>
            <div className="dialog_page">
              <h2>Type</h2>
              <div className="listItem">
                <h4>NSWF</h4>
                <Switch />
              </div>
              <div className="listItem">
                <h4>Single part joke</h4>
                <Switch />
              </div>
              <div className="listItem">
                <h4>Two part joke</h4>
                <Switch />
              </div>
              <div>
                <h2>Categories</h2>
                {categories.map((category, index) => {
                  return (
                    <div>
                      <h4>{category.name}</h4>
                      <Switch checked={category.show} />
                    </div>
                  );
                })}
              </div>
            </div>
          </ListItem>
          <button
            style={{
              marginLeft: "2rem",
            }}
            className="button"
          >
            Save
          </button>
        </List>
      </Box>
    </Drawer>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState({});
  const [setup, setSetup] = useState();

  const dialogOpen = () => {
    setOpen(true);
  };
  const dialogClose = () => {
    setOpen(false);
  };
  const getRandomJoke = async () => {
    const parameters = {
      amount: 6,
    };
    setIsLoading(true);
    const data = await getJokes(parameters);
    //check if joke is single or two part
    setJoke(data);
    setIsLoading(false);
  };
  return (
    <div className="App">
      <SideDrawer
        dialogOpen={dialogOpen}
        dialogClose={dialogClose}
        open={open}
      />
      <h1 className="title">Wanna Hear a Joke?</h1>
      <div className="joke_container">
        <img src={illustration} alt="illustration" />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <CircularProgress size={150} sx={{ color: "#c9ada7", margin: 0 }} />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "3rem",
            }}
          >
            {joke.type === "single" ? (
              <div className="bubble">{joke.joke}</div>
            ) : (
              <>
                <div className="bubble">{joke.setup}</div>
                <div className="bubble">{joke.delivery}</div>
              </>
            )}
          </div>
        )}
      </div>
      <div>
        <input placeholder="Search any keyword" className="search_bar" />
      </div>
      <div className="buttons_section">
        <button className="button" onClick={getRandomJoke}>
          Random
        </button>
        <button className="button">Search</button>
        <button
          className="button"
          onClick={() => {
            dialogOpen();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default App;
