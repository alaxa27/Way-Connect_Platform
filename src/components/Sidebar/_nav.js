import devNav from "./_dev-nav";
import prodNav from "./_prod-nav";

let nav = null;
switch(process.env.STAGE) {
  case "development":
    nav = devNav;
    break;
  default:
    nav = prodNav;
    break;
}

export default nav;