import { Box } from "@mui/material";
import fakeData from "./fakeData.json";
import { ItemCard } from "./ItemCard";

export function CardContainer() {
  return (
    <Box display="flex" flexWrap="wrap">
      {fakeData.map((item) => (
        <ItemCard itemName={item.itemName} price={item.price} />
      ))}
    </Box>
  );
}
