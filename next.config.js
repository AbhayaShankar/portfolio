/**
 * @type {import('next').NextConfig}
 */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
require("dotenv").config();

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    images: {
      unoptimized: true,
    },
    env: {
      feedback_username: process.env.FEEDBACK_USERNAME,
      feedback_password: process.env.FEEDBACK_PASSWORD,
      feedback_cluster: process.env.FEEDBACK_CLUSTER,
      feedback_database: isDev
        ? process.env.FEEDBACK_DATABASE
        : process.env.FEEDBACK_DATABASE_PROD,
    },
  };
};
