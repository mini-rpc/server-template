import { RPCServer } from "@mini-rpc/server";
import services from "./services";

const PORT = Number(process.env.PORT) || 3000;

function bootstrap() {
  const server = new RPCServer();
  server.registerServices(services);
  server.listen(PORT);
  console.log(`Serving in port ${PORT}`);
}

bootstrap();
