import express from "express";
import connect from "./schemas/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import { postsRouter, commentsRouter } from "./routes/index.js";

const app = express();
const port = 6010;
connect();

// JSON 미들웨어 사용 설정
app.use(express.json());
// Swagger 문서 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
// 기본 경로 설정
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 라우터 설정
app.use("/posts", postsRouter);
app.use("/posts", commentsRouter);

// 오류 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack); // 에러 스택 출력
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
