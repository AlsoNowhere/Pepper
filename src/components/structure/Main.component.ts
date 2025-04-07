import { component, div, mFor, MintScope, mRef, node } from "mint";

import { Photo } from "../photos/Photo.component";

class MainComponent extends MintScope {
  list: Array<{ src: string }>;

  listElementRef: HTMLUListElement;

  constructor() {
    super();

    this.list = ["neko_plus.ico"].map((src) => ({ src }));

    this.listElementRef = null;
  }
}

export const Main = component(
  "main",
  MainComponent,
  {},
  div({ class: "constrain centred padding-large" }, [
    node(
      "ul",
      { class: "list flex", ...mRef("listElementRef") },
      node(
        "li",
        {
          ...mFor("list"),
          mKey: "_i",
          class: "relative grid-3",
          style: "padding-bottom: 25%;",
        },
        node(Photo, { src: "./src/img/{src}", "[name]": "src" })
      )
    ),
  ])
);
