declare module '*.svg' {
  /** Default type is string, change this if you use a custom svg loader. */
  const content: string;
  export default content;
}

declare module '*.png' {
  /** Default type is string, change this if you use a custom png loader. */
  const content: string;
  export default content;
}

declare module '*.jpg' {
  /** Default type is string, change this if you use a custom jpeg loader. */
  const content: string;
  export default content;
}

declare module '*.webp' {
  /** Default type is string, change this if you use a custom webp loader. */
  const content: string;
  export default content;
}
