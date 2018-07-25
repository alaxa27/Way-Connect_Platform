import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {BreadcrumbItem} from "reactstrap";
import {translate} from "react-i18next";
import routes from "../../routes";
import { camelCase } from "lodash";

const findRouteName = url => routes[url];

const BreadcrumbsItem = ({
  match,
  t
}) => {
  const routeName = findRouteName(match.url);
  const translate = (routeName) => {
    return t("breadcrumbs." + camelCase(routeName));
  };
  if (routeName) {
    return (
      match.isExact
      ? (<BreadcrumbItem active>{translate(routeName)}</BreadcrumbItem>)
      : (<BreadcrumbItem>
        <Link to={match.url || ""}>
          {translate(routeName)}
        </Link>
      </BreadcrumbItem>));
  }
  return null;
};

BreadcrumbsItem.propTypes = {
  match: PropTypes.object,
  t: PropTypes.func
};

export default translate("translations")(BreadcrumbsItem);
