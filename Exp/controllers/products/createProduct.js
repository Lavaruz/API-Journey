export default (req, res) => {
  res.status(201).json({
    msg: "success create product",
    data: req.body,
  });
};
