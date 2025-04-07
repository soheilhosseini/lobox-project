import { ReactElement } from "react";

type UUID = string;

//the _id is added to simulate that the items are recived from the server
export interface dataItemInterface {
  text: string;
  value: string;
  icon: ReactElement;
  _id: UUID;
}
