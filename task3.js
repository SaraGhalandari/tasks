// Function to filter and concatenate feedback data
const getConcatenatedFeedbacks = (feedbacks) => {
    const concatenatedFeedbacks = {};

    Object.keys(feedbacks.feedback.values).forEach(feedbackId => {
        if (feedbacks.inputs.id === feedbackId) {
            const feedbackValues = feedbacks.feedback.values[feedbackId];
            const concatenatedData = feedbackValues.map(value => ({
                value,
                ...feedbacks.inputs
            }));

            concatenatedFeedbacks[feedbackId] = concatenatedData;
        }
    });

    return concatenatedFeedbacks;
};

// Example: Get concatenated feedbacks
const result = getConcatenatedFeedbacks(feedbacks);

// Example: Send the result to the API
// Assume there is an API function called sendFeedbacksToAPI(apiData) that sends feedback data to the API
sendFeedbacksToAPI(result);
