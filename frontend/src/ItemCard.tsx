import { Card, CardHeader } from "@mui/material";

type ItemCardProps = {
  itemName: string;
  price: number;
};

export function ItemCard({ itemName, price }: ItemCardProps) {
  return (
    <Card sx={{ width: "20rem", margin: "1rem" }}>
      <CardHeader title={itemName} subheader={`$${price}`} />
    </Card>
  );
}
