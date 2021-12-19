// export const myLoader = ({ src, width, quality }) => {
//   return `https://master.d1w0rhvxlv5xov.amplifyapp.com${src}?w=${width}&q=${quality || 75}`;
// };

// export const myLoader = ({ src, width, quality }) => {
//   return `http://localhost:3000${src}?w=${width}&q=${quality || 75}`;
// };

export const myLoader = ({ src, width, quality }) => {
  return `http://172.30.1.26:3000${src}?w=${width}&q=${quality || 75}`;
};
