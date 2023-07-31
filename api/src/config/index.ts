import { config } from "dotenv";

// Load .env file
config();

// Export env variables

export default {
  dev: {
    port: process.env.PORT,
  },
};
