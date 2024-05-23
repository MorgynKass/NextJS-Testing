/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "../__mocks__/fakeData";

test("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays error message passed in through props", async () => {
  render(<BandComponent band={null} error="test error message" />);

  const error = screen.getByRole("heading", { name: /test error message/i });
  expect(error).toBeInTheDocument();
});
