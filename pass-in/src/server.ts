import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "hello";
});

app.get("/teste", () => {
  return "hello teste";
});

app.listen({ port: 3333 }).then(() => {
  console.log("http server running");
});
