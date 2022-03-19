export const example = async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json({ message: `Test oke with ${id}` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
