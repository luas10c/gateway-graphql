import express from "express";
import cors from "cors";

class HttpException extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
  }
}

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/payments", (request, response) => {
  console.log(request.headers.authorization);

  const error = false;
  if (error) {
    throw new HttpException("Nenhum pagamento encontrado", 400);
  }

  return response.json({
    id: "1",
    price: 89,
    description: "...",
  });
});

app.use((error, request, response, next) => {
  if (error instanceof HttpException) {
    return response.status(400).json({
      statusCode: error.statusCode,
      message: error.message,
    });
  }
});

app.listen(4001);
