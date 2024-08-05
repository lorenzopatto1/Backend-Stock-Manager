export default {
  matrixJwt: {
    secret: process.env.MATRIX_SECRET || "default",
    expiresIn: "7d",
  },
  functionaryJwt: {
    secret: process.env.FUNCTIONARY_SECRET || "default",
    expiresIn: "7d",
  },
};
