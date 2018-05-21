import React, {Component} from "react";
import PropTypes from "prop-types";
import {Route, Link} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import routes from "../../routes";

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
  const paths = ["/"];

  if (pathname === "/")
    return paths;

  pathname.split("/").reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const BreadcrumbsItem = ({
  match,
  ...rest
}) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact
      ? (<BreadcrumbItem active>{routeName}</BreadcrumbItem>)
      : (<BreadcrumbItem>
        <Link to={match.url || ""}>
          {routeName}
        </Link>
      </BreadcrumbItem>));
  }
  return null;
};
BreadcrumbsItem.propTypes = {
  match: PropTypes.object
};

const Breadcrumbs = ({
  location: {
    pathname
  },
  match,
  ...rest
}) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem}/>);
  return (<Breadcrumb>
    {items}
  </Breadcrumb>);
};
Breadcrumbs.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

class BreadcrumbComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <Route path="/:path" component={Breadcrumbs} {...this.props}/>
    </div>);
  }
}

export default BreadcrumbComponent;
