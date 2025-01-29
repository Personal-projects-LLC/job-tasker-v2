declare module '@public/meta.json' {
  interface Plugin {
    id: string;
    setup: string;
    punchline: string;
    [key: string]: string;
  }

  interface MetaData {
    plugins: Plugin[];
  }

  const value: MetaData;
  export default value;
}
