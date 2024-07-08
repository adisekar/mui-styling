import { Theme, useTheme } from "@mui/material/styles";
import Header from "./Header";
import NavDrawer from "./NavDrawer";
import {
  ThemeProvider,
  Toolbar,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Route, Routes } from "react-router-dom";
import ContactForm from "../form/ContactForm";
import ContactCardGrid from "../grid/ContactCardGrid";
import ContactTable from "../table/ContactTable";
import ContactDataGrid from "../data-grid/ContactDataGrid";
import { useEffect, useState } from "react";

const drawerWidth = 240;
const transitionDuration = 1000;

const themedStyles = (theme: Theme, responsiveDrawerWidth: number | string) => {
  return {
    menuButton: {
      marginRight: 2,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: responsiveDrawerWidth,
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: responsiveDrawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)",
    },
    content: {
      marginLeft: 0,
      padding: 3,
      maxWidth: 720,
      minWidth: 375,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
    contentShift: {
      marginLeft: responsiveDrawerWidth,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: transitionDuration,
      }),
    },
  };
};

export default function Layout() {
  const theme = useTheme();
  const greaterThan375 = useMediaQuery("(min-width: 376px)");
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : "100%";

  const [open, setOpen] = useState(greaterThan375);

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  function handleMenuIconClick() {
    setOpen(!open);
  }

  return (
    <div>
      <Header
        appBarStyles={themedStyles(theme, responsiveDrawerWidth).appBar}
        menuButtonStyles={themedStyles(theme, responsiveDrawerWidth).menuButton}
        isLargeScreen={greaterThan375}
        onMenuClick={handleMenuIconClick}
      />
      <NavDrawer
        drawerStyle={themedStyles(theme, responsiveDrawerWidth).drawer}
        drawerPaperStyle={
          themedStyles(theme, responsiveDrawerWidth).drawerPaper
        }
        open={open}
        transitionDuration={transitionDuration}
      />
      <main
        style={{
          ...themedStyles(theme, responsiveDrawerWidth).content,
          ...(open
            ? themedStyles(theme, responsiveDrawerWidth).contentShift
            : {}),
        }}
      >
        <Toolbar />
        <ThemeProvider
          theme={(theme: Theme) =>
            createTheme({
              ...theme,
              palette: {
                ...theme.palette,
                primary: {
                  main: green[500],
                },
              },
            })
          }
        >
          <Routes>
            <Route path={"/"} element={<ContactForm />} />
            <Route path={"/form"} element={<ContactForm />} />
            <Route path={"/grid"} element={<ContactCardGrid />} />
            <Route path={"/table"} element={<ContactTable />} />
            <Route path={"/datagrid"} element={<ContactDataGrid />} />
          </Routes>
        </ThemeProvider>
      </main>
    </div>
  );
}
