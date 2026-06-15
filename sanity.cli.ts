/* Sanity CLI config — для команд типа npx sanity exec.
   Project и dataset берутся из тех же env-переменных что и Studio. */

import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
});
