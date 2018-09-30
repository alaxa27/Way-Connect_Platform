import devNav from "./_dev-nav";
import prodNav from "./_prod-nav";

let nav = null;
switch(process.env.STAGE) {
  case "production":
    nav = prodNav;
    break;
  default:
    nav = devNav;
    break;
}

export default nav;
