import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/login", (request, response) => {
  console.log(request.body);

  return response.json({
    access_token: "...",
    refresh_token: "...",
  });
});

app.use("/account/:id", (request, response) => {
  console.log(request.params);
  return response.json({
    id: request.params.id,
  });
});

app.listen(4004);
