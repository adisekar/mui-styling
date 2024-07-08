import { Drawer, List, ListItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerItems = [
  { text: "Input Form", route: "/form" },
  { text: "Contact Card Grid", route: "/grid" },
  { text: "Contact Table", route: "/table" },
  { text: "Contact Data Grid", route: "/datagrid" },
];

export default function NavDrawer({
  drawerStyle,
  drawerPaperStyle,
  transitionDuration,
  open,
}: any) {
  return (
    <Drawer
      disableEnforceFocus
      variant="temporary"
      open={open}
      sx={drawerStyle}
      PaperProps={{
        sx: drawerPaperStyle,
        elevation: 9,
      }}
      transitionDuration={{
        enter: transitionDuration,
        exit: transitionDuration,
      }}
    >
      <Toolbar />
      <List>
        {drawerItems.map((nav, index) => (
          <ListItem
            sx={{
              borderBottom: "1px solid black",
              borderBottomColor: "primary.main",
            }}
            key={nav.text}
          >
            <Link to={nav.route}>{nav.text}</Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
