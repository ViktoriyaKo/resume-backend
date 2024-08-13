import RequestModel from '../models/Request.js';

export const create = async (req, res) => {
  try {
    const doc = new RequestModel({
      email: req.body.email,
      text: req.body.text,
    });

    const request = await doc.save();
    res.json(request);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'Error 404' });
  }
};
