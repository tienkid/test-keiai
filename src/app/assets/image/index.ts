export const images = {
  bg_wallpaper: require('./source/bg.png'),
  default: require('./source/default.png'),
  logo: require('./source/keiai_plus_logo.png'),
  banner: require('./source/banner.png'),
  headerLogo: require('./source/headerLogo.png'),
  denki: require('./source/denki_1.png'),
  iesapo: require('./source/iesapo_1.png'),
  internet: require('./source/internet_1.png'),
  support: require('./source/support.png'),
  term_policy: require('./source/term_policy.png'),
  item_content: require('./source/itemContent.png'),
  item_recommend: require('./source/itemRecomment.png'),
};

export type ImageTypes = keyof typeof images;
