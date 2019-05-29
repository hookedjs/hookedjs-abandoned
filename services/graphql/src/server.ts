import { Request } from 'express';
import {decode, verify} from "jsonwebtoken";
import 'reflect-metadata';
import { DefaultNamingStrategy } from 'typeorm';
import { BaseContext, Server } from 'warthog';
import PublicKey from "../generated/public.pem";
import { AuthChecker } from "./modules/users/AuthChecker";

type ContextUser = {
  id: string;
  roles: string[];
};

export interface Context extends BaseContext {
  user?: ContextUser;
}

export function getServer(AppOptions = {}) {
  return new Server(
    {
      introspection: true,
      openPlayground: false,
      warthogImportPath: 'warthog',
      authChecker: AuthChecker,
      context: (request: Request) => {
        // Parse the JWT from the headers
        const token = request.cookies.jwt;
        // TODO: Restrict alg types after confirmed working
        // return (verify(token, Secret, {algorithms: ['RS256']}))
        if (verify(token, PublicKey)) {
          const payload = decode(token, { json: true })! as {user: ContextUser};
          return payload.user;
        }
        else { return {} }
      },
      ...AppOptions
    },
    {
      // Make sure TypeORM does not auto-update the DB schema so that we know our CLI commands
      // are making the changes
      synchronize: false,

      // Reset Warthog table naming strategy to default Typeorm. Warthog by default uses a custom
      // naming strategy, which is challenging to get working with the Typeorm CLI and our
      // environmental variable strategy. I also don't see any benefit to Warthog's.
      namingStrategy: new DefaultNamingStrategy()
    }
  );
}
