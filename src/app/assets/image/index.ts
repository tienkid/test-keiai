export const images = {
  bg_wallpaper: require('./source/bg.png'),
  default: require('./source/default.png'),
  logo: require('./source/keiai_plus_logo.png'),
  banner: require('./source/banner.png'),
  headerLogo: require('./source/headerLogo.png'),
};

export type ImageTypes = keyof typeof images;
