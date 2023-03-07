import { validationResult } from "express-validator";

export default (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json("Error");
  }
  res.status(200).json({
    msg: `id ${id} updated`,
    data: req.body,
  });
};
