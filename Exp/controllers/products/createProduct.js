import { validationResult } from "express-validator";

export default (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Error");
  }
  res.status(201).json({
    msg: "success create product",
    data: req.body,
  });
};
