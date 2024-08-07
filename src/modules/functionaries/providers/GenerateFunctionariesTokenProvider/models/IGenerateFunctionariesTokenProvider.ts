export default interface IGenerateFunctionariesTokenProvider {
  execute: (id: string) => Promise<string>;
}
