const path = require('path');
const express = require('express');

const app = express();

// Render sets the PORT env var for the service. Use a fallback for local dev.
// Use the env var directly so Render's port check recognizes it.
const PORT = process.env.PORT || 3000;

// Serve static build assets.
app.use(express.static(path.join(__dirname, 'build')));

// Always return the main index.html, so React Router can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
