# Node.js Express Server

A simple Node.js web server application built with Express.js that demonstrates basic HTTP endpoint implementation. This project serves as a foundation for web application development and an educational resource for developers learning server-side JavaScript.

## Overview

This application implements a lightweight HTTP server with two endpoints:
- `GET /` - Returns "Hello world"
- `GET /evening` - Returns "Good evening"

The server is built using Node.js and Express.js, providing a non-blocking, event-driven architecture suitable for handling multiple concurrent requests.

## Prerequisites

- Node.js (v14.x LTS or newer)
- npm (included with Node.js)

## Installation

1. Clone this repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server

Start the server with the following command:

```bash
npm start
```

By default, the server will run on port 3000. You should see a message indicating the server is running.

### API Endpoints

#### GET /

Returns "Hello world" with a 200 OK status code.

Example request using curl:
```bash
curl http://localhost:3000/
```

Expected response:
```
Hello world
```

#### GET /evening

Returns "Good evening" with a 200 OK status code.

Example request using curl:
```bash
curl http://localhost:3000/evening
```

Expected response:
```
Good evening
```

## Configuration

The server can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|--------|
| PORT | The port on which the server will listen | 3000 |

Example of starting the server on a custom port:

```bash
PORT=8080 npm start
```

## Project Structure

```
/
├── README.md    # Project documentation
├── package.json # Node.js project configuration
├── index.js     # Server implementation
└── node_modules/ # (Generated during installation)
```

## Development

### Requirements

- Node.js v14.x LTS or newer
- Express.js 4.18.x

### Coding Standards

- Use modern JavaScript (ES2021) features
- Ensure cross-platform compatibility (Linux, macOS, Windows)
- Follow proper error handling practices
- Include appropriate comments for code clarity

### Testing

Manually test both endpoints to ensure they return the expected responses with the correct status codes.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

[Include appropriate license information here]

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)