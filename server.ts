import { app } from "./app/app";

import Debug from "debug";
const debug = Debug("hinano:server");

import http from "http";

/* Get port from environment and store in Express. */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/* Create HTTP server. */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces. */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/* Normalize a port into a number, string, or false. */
function normalizePort(val: string): string | number | boolean {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/* Event listener for HTTP server "error" event. */
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  switch (error.code) {
    case "EACCES":
      console.error(
        [
          typeof port === "string" ? "Pipe" : "Port",
          port,
          "requires elevated privileges",
        ].join(" ")
      );
      break;
    case "EADDRINUSE":
      console.error(
        [
          typeof port === "string" ? "Pipe" : "Port",
          port,
          "is already in use",
        ].join(" ")
      );
      break;
    default:
      throw error;
  }
  process.exit(1);
}

/* Event listener for HTTP server "listening" event. */
function onListening(): void {
  const addr = server.address();

  if (addr === null) {
    return;
  } else if (typeof addr === "string") {
    debug(`Listening on pipe ${addr}`);
  } else {
    debug(`Listening on port ${addr.port}`);
  }
}
