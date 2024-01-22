// Ensure all objects with an ID follow the specified format
const formatObjects = (id, data) => ({ id, data });

// Example: Format objects with ID in feedbacks array
const formattedFeedbacks = feedbacks.map(feedback => formatObjects(feedback.id, feedback.data));

// Example: Sort steps array based on sortIndex
formattedFeedbacks.forEach(feedback => {
    feedback.data.steps.sort((a, b) => a.data.sortIndex - b.data.sortIndex);
});