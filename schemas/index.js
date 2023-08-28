// /schemas/index.js
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: 'nodejs_lv1',
      },
    )
    .catch((err) => console.log(err))
    .then(() => console.log('몽고디비 연결 성공'));
};

mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

export default connect;