import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", (request, response) => {
  return response.json({
    id: "11223",
    name: "....",
  });
});

app.listen(4002);
