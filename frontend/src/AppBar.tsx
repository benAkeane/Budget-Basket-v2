import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "@mui/icons-material/ShoppingCart";

export default function TopAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#b23948" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box display="flex" alignItems="center" gap="1rem" sx={{ flexGrow: 1 }}>
          <Typography variant="h5" fontWeight="700" fontFamily={"monospace"}>
            Budget Basket
          </Typography>
          <CartIcon />
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
