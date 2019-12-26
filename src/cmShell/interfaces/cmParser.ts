export interface ICmParser<T> {
  readLineOut(line: string): void;
  readLineErr(line: string): void;
  parse(): T;
  getError(): Error | undefined;
}