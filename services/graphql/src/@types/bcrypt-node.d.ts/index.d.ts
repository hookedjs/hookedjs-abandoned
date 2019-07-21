// declare module "bcrypt-node";
declare module 'bcrypt-node' {
  // export default function(userAgent: string): boolean;
  export function compareSync(key: string, hash: string): boolean;
  export function hashSync(key: string, count: number): string;
}
