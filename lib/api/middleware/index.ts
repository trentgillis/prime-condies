import nc from 'next-connect';

import database from '@/lib/api/middleware/database';

const middleware = nc();

// Chain middleware usage here and nc use in api routes
middleware.use(database);

export default middleware;
