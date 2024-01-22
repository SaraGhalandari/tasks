// Function to format objects with an ID
const formatObject = (id, data) => ({ id, data });

// Function to recursively format objects in an array
const formatArrayObjects = (array) => {
    return array.map(obj => {
        if (obj.id && obj.data) {
            return formatObject(obj.id, formatArrayObjects(obj.data));
        } else {
            return obj;
        }
    });
};

// Function to format feedback and apply formatting to all objects
const formatFeedback = (feedback) => {
    return formatObject(feedback.id, formatArrayObjects(feedback));
};

// Example: Format the feedback
const formattedFeedback = formatFeedback(feedback);

// Example: Send the formatted feedback to the API
// Assume there is an API function called sendFeedback(apiData) that sends feedback data to the API
sendFeedback(formattedFeedback);