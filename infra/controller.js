const { MethodNotAllowedError, InternalServerError } = require("./errors");

function onNoMatchHandler(request, response) {
  const publicError = new MethodNotAllowedError();

  response.status(publicError.statusCode).json(publicError);
}

function onErrorHandler(err, request, response) {
  const publicErrorObject = new InternalServerError({
    cause: err,
    statusCode: err.statusCode,
  });

  console.log("\nErro dentro do catch do next-connect:");
  console.error(publicErrorObject);

  response.status(publicErrorObject.statusCode).json(publicErrorObject);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
