import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 3000;
//connections and listeners
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server open at port ${PORT} and connected to MongoDB.`);
    });
  })
  .catch((err) => console.log(err));
