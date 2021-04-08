
require('dotenv').config();

const defaults = {
    url: process.env.LOGGING_CONNECTION,
    method: 'POST',
    headers: {},
    token: '',
    onUnauthorized: failedToken => {},
    timeout: 0,
    interval: 1000,
    level: 'trace',
    backoff: {
      multiplier: 2,
      jitter: 0.1,
      limit: 30000,
    },
    capacity: 500,
    stacktrace: {
      levels: ['trace', 'warn', 'error'],
      depth: 3,
      excess: 0,
    },
    timestamp: () => new Date().toISOString(),
    format: remote.plain,
  };
  