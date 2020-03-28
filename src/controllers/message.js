import Model from '../models/models';

const messages = new Model('messages');

export const messagesPage = async (req, res, next) => {
  try {
    const data = await messages.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    next(err);
  }
};

export const addMessage = async (req, res, next) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;

  try {
    const data = await messages.insertWithReturnId(columns, values);
    res.status(201).json({ messages: data.rows });
  } catch (err) {
    next(err);
  }
};

export default home;
