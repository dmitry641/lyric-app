import React from "react";
import { TracksProvider } from "../tracks/Tracks";
import Track from "../tracks/Track";

export default function Index() {
  return (
    <TracksProvider>
      <Track></Track>
    </TracksProvider>
  );
}
