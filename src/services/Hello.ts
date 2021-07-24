import { Service, Callable } from "@mini-rpc/server";

@Service()
export class Hello {
  @Callable()
  helloTo(name: string): string {
    return `Hello ${name}`;
  }
}
