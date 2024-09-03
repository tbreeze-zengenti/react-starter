/**
 * Represents a new type with specified properties from the original type made required.
 * @template T - The original type.
 * @template K - The keys of the original type to be made required.
 * @typedef {T & { [P in K]-?: T[P] }} WithRequired
 * @example
 * // Makes 'name' and 'age' properties required in the 'Person' type.
 * type Person = { name?: string; age?: number };
 * const person: WithRequired<Person, 'name' | 'age'> = { name: 'John', age: 30 }; // 'name' and 'age' are required.
 */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
