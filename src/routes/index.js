import express from 'express';

import home from '../controllers/message';

const indexRouter = express.Router();

indexRouter.get('/messages', home.messagesPage);
indexRouter.post('/messages', home.addMessage);

export default indexRouter;
