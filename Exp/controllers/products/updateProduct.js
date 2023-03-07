export default (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    msg: `id ${id} updated`,
    data: req.body,
  });
};
