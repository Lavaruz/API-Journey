export default (req, res) => {
  const { id } = req.params;
  res.status(200).json("delete " + id);
};
