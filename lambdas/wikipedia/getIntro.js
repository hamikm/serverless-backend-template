const resp = require('../lib/responseHelpers');


exports.main = (event, context, callback) => {
    const article = event.pathParameters.article;

    return callback(null, resp.success(response));
};
