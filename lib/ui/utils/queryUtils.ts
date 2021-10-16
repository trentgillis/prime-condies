import type { IncomingMessage } from 'http';

/**
 * Returns whether or not the routing to the page was client triggered or not. To be used in
 * getServerSideProps to avoid over fetching data via react-query. Example in Area [id] page
 * @param req Request object obtained from next page context
 * @returns whether or not the routing to the page was from the client or the server
 */
export const getIsClientSideRouted = (req: IncomingMessage & { cookies: any }): boolean => {
  return !req || (req.url && req.url.startsWith('/_next/data')) || false;
};
