const math = require('mathjs');

exports.calculate = (req, res) => {
  try {
    const { expression } = req.body;
    const result = math.evaluate(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
};