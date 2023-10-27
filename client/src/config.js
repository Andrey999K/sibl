const config = {
  apiEndPoint: process.env.NODE_ENV === "production" ? "http://95.143.188.184:8080/api" : "http://localhost:8080/api"
};

export default config;
