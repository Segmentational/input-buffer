/***
 * Input Buffer Parser
 *
 * @param {string} prompt
 * @param {boolean} strict - Only allow serializable input
 * @param {boolean} debug
 * @returns {Promise<any>}
 *
 * @constructor
 */
declare const IO: (prompt: string, strict?: boolean, debug?: boolean) => Promise<any>;
declare const Example: () => Promise<string>;
export { IO, Example };
export default IO;
