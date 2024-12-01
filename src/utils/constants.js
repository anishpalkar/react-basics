//constans.js is in small because its not a component
const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";
const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2380683&lng=72.8522512&restaurantId=";

export { LOGO_URL, CDN_URL, MENU_URL };
// This is not default export this is called named export

// In one file we can only have one default export. But it can have multiple named exports.

//Another way we can use named export:
// export const LOGO_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";
// export const CDN_URL =
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dgbnrayddvyzf2ujrbej";

// import {LOGO_URL} for named exports.
