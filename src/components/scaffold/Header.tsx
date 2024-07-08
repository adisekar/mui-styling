import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  appBarStyles: {};
  menuButtonStyles: {};
  isLargeScreen: boolean;
  onMenuClick: () => void;
}
export default function Header({
  appBarStyles,
  menuButtonStyles,
  isLargeScreen,
  onMenuClick,
}: HeaderProps) {
  return (
    <AppBar position="fixed" sx={appBarStyles}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{
            ...menuButtonStyles,
            display: isLargeScreen ? "none" : "",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Advanced Material UI Styling
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
