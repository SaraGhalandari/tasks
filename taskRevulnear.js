// Assuming the User model is imported correctly
// const User = require('./models/user');

app.post('/forgot-password', async (req, res) => {
    try {
        // Validate request body using Joi schema
        const schema = Joi.object({ email: Joi.string().required().email() });
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Find user by email
        const user = await User.findOne({ where: { email: req.body.email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate reset token and expiration time
        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpiration = Date.now() + 180000;

        // Update user with reset token and expiration time
        user.resetToken = resetToken;
        user.resetTokenExpiration = resetTokenExpiration;
        await user.save();

        // Assume sendResetEmail is a secure email sending function
        sendResetEmail(req.body.email, resetToken);

        res.json({ message: 'Reset email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Assume the sendResetEmail function is implemented securely
function sendResetEmail(email, resetToken) {
    // Implement the email sending logic securely
}
