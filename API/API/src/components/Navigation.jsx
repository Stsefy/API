import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photo Albums
        </Typography>
        <Button color="inherit" component={RouterLink} to="/users">
          Users
        </Button>
        <Button color="inherit" component={RouterLink} to="/albums">
          Albums
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
