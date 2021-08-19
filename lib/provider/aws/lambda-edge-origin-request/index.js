const cleanUpEvent = require('./clean-up-event');

const createRequest = require('./create-request');
const formatResponse = require('./format-response');

module.exports = options => {
  return getResponse => async (event_, context = {}) => {
    const event = cleanUpEvent(event_, options);
    // DEBUG
    console.log('serverless :: event :: ', event);
    const request = createRequest(event, options);
    // DEBUG
    console.log('serverless :: request :: ', request);
    const response = await getResponse(request, event, context);
    const formattedResponse = formatResponse(response, options);

    return formattedResponse;
  };
};
