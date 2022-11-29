import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/client/dist/build`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});
const books = new Map();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

router.get("/book", (context) => {
  context.response.body = Array.from(books.values());
});
router.get("/book/:id", (context) => {
  if (books.has(context?.params?.id)) {
    context.response.body = books.get(context.params.id);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname === "0.0.0.0" ? "localhost" : hostname
    }:${port}`
  );
});
await app.listen({ port: 8000 });
