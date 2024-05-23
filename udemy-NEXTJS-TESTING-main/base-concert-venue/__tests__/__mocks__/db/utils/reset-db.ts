/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable simple-import-sort/imports */
import { readFakeData } from "../../fakeData";
import { filenames, writeJSONToFile } from "../../../../lib/db/db-utils";

export const resetDB = async () => {
  // failsafe against resetting production db!
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset unavailable outside test enviroment!");
    return;
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  // overwrite data in files
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
