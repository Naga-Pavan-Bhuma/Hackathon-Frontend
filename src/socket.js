import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000"; // Backend URL

export const socket = io(SOCKET_URL, {
  withCredentials: true,
  transports: ["websocket"],
});