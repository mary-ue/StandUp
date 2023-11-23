export const sendData = (res, data) => {
  res.writeHead(200, {
    'Content-type': 'text/json; charset=utf-8',
    // 'Access-Control-Allow-Origin': '*'
  });

  res.end(JSON.stringify(data));
};

export const sendError = (res, statusCode, errMessage) => {
  res.writeHead(statusCode, {
    'Content-type': 'text/plain; charset=utf-8',
  });
  res.end(errMessage);
};