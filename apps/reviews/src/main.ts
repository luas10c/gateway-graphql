import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/reviews", (request, response) => {
  return response.json({
    message: "reviews",
  });
});

app.listen(4003);
