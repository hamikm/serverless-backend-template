const resp = require('../lib/responseHelpers');


exports.main = (event, context, callback) => {
    const article = event.pathParameters.article;
    // TODO: add rpc call to get introduction of wikipedia article of given name
    return callback(null, resp.success(response));
};
