const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

module.exports = cors(corsOptions);
