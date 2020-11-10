import React from "react";
import { Container } from "@material-ui/core";

const Details = (props) => {
  const id = props.match.params.id;
  const listings = props.listings.find((d) => d.id == id);

  return (
    <Container maxWidth="sm">
      <p>{listings.Name}</p>
      <p>{listings.Description}</p>
      <p>{listings.Hours}</p>
      <p>{listings.Address}</p>
    </Container>
  );
};
export default Details;