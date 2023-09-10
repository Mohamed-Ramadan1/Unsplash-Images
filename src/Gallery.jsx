import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import React from "react";
import customeFeatch from "./customeAxios";

const Gallery = () => {
  const { searchParam } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchParam],
    queryFn: () => customeFeatch.get(`/${searchParam}`),
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading......</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error......</h4>
      </section>
    );
  }

  const result = data.data.results;
  if (result.length < 1) {
    return (
      <section className="image-container">
        <h4>No Result found....</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
