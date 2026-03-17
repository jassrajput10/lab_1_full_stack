import express from "express";
import cors from "cors";

import employeeRoutes from "./routes/employeeRoutes";
import organizationRoutes from "./routes/organizationRoutes";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api", employeeRoutes);
app.use("/api", organizationRoutes);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});