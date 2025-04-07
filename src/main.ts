import { app, node } from "mint";

import { Aside } from "./components/structure/Aside.component";
import { Main } from "./components/structure/Main.component";

app(document.body, {}, [node(Aside), node(Main)]);
