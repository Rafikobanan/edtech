declare module '*svg?sprite' {
  const content: React.HTMLAttributes<SVGElement> & { id: string };
  export default content;
}
