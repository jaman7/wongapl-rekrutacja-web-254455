import createServerHandler from "tinacms";
import config from "../../../../tina/config";

export const GET = createServerHandler({
    config,
    mode: "server",
  });
  
  export const POST = createServerHandler({
    config,
    mode: "server",
  });