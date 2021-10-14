export type ResponseError = {
  status: number;
  message: string;
};

export const NotFoundError: ResponseError = {
  status: 404,
  message: 'Resource not found',
};

export const InternalServerError: ResponseError = {
  status: 500,
  message: 'Internal server error',
};

export const MethodNotAllowedError: ResponseError = {
  status: 405,
  message: 'Method not allowed',
};
