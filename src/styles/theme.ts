// Color names from abouts.co or colornamer.robertcooper.me
const color = {
  apricot: '#FFEABF',
  brightSun: '#FFD140',
  casper: '#A9B5BC',
  frostyDay: '#CEEAF9',
  haiti: '#0E1330',
  manhattan: '#F7CAA6',
  mirage: '#1C1F3A',
  ocean: '#2F61A1',
  oldGold: '#CE9F43',
  springWood: '#FBF9F7',
};

const font = {
  family: {
    body: `'Work Sans', sans-serif`,
    heading: `'Libre Baskerville', serif`,
  },
  mixins: {
    ellipsisOverflow: `
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
  },
  size: {
    s: '0.875rem',
    m: '1rem', // eslint-disable-line sort-keys
    huge: '3rem', // eslint-disable-line sort-keys
  },
};

const layout = {
  headerHeight: '64px',
  minMobileWidth: '320px',
};

const space = {
  xs: '0.25rem', // eslint-disable-line sort-keys
  s: '0.5rem', // eslint-disable-line sort-keys
  m: '1rem', // eslint-disable-line sort-keys
  l: '1.5rem', // eslint-disable-line sort-keys
  xl: '2rem',
};

export const theme = {
  color,
  font,
  layout,
  space,
};
