/**
 * Load a script to the page
 */
export const loadScript = ({
  callback,
  id,
  position = 'body',
  properties,
  src,
  text,
}: {
  callback?: (...args: any) => any;
  id: string;
  position?: 'head' | 'body';
  properties?: { key: string; value: string }[];
  src?: string;
  text?: any;
}) => {
  if (typeof window === 'undefined') return null;

  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.id = id;
    if (src) {
      script.src = src;
    }
    if (properties && properties.length > 0) {
      properties.map(p => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        script[p.key] = p.value;
      });
    }
    if (text) {
      script.text = text;
    }
    if (position === 'head') document.head.appendChild(script);
    else document.body.appendChild(script);

    if (callback) script.onload = () => callback();
  }
};
