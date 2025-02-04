import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Badge, Nav, NavItem, NavLink as RsNavLink} from "reactstrap";
import classNames from "classnames";
import nav from "./_nav";
import SidebarFooter from "./../SidebarFooter";
import SidebarForm from "./../SidebarForm";
import SidebarHeader from "./../SidebarHeader";
import SidebarMinimizer from "./../SidebarMinimizer";
import * as actions from "../../actions/establishmentActions";
import { connect } from "react-redux";
import _ from "underscore";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import {compose} from "recompose";
import { isUndefined } from "underscore";
import { camelCase } from "lodash";

const mapStateToProps = state => ({
  myEstablishments: state.establishment.myEstablishments,
});

const mapDispatchToProps = dispatch => ({
  fetchMyEstablishmentList: payload => dispatch(actions.fetchMyEstablishmentList())
});

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
    props.fetchMyEstablishmentList();
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle("open");
  }

  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? "nav-item nav-dropdown open" : "nav-item nav-dropdown";

  }

  hideMobile() {
    if (document.body.classList.contains("sidebar-mobile-show")) {
      document.body.classList.toggle("sidebar-mobile-show");
    }
  }

  // todo Sidebar nav secondLevel
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  handleEstablishments(props) {
    const myEstablishments = _.map(props.myEstablishments.items, item => {
      return {
        name: item.name,
        url: "/establishment/" + item.id,
        translatable: false
      };
    });
    let establishmentMenuItem = _.find(nav.items, item => item.name === "Establishments");
    establishmentMenuItem["children"] = [...myEstablishments];
    establishmentMenuItem["children"].push({
      name: "Add",
      url: "",
      icon: "icon-plus",
      onClick: this.props.toggleModal
    });
  }

  render() {
    const props = this.props;

    this.handleEstablishments(props);

    // badge addon to NavItem
    const badge = (badge) => {
      if (badge) {
        const classes = classNames( badge.class );
        return (<Badge className={ classes } color={ badge.variant }>{ badge.text }</Badge>);
      }
    };

    // simple wrapper for nav-title item
    const wrapper = item => { return (item.wrapper && item.wrapper.element ? (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)): item.name ); };

    // nav list section title
    const title =  (title, key) => {
      const classes = classNames( "nav-title", title.class);
      return (<li key={key} className={ classes }>{wrapper(title)} </li>);
    };

    // nav list divider
    const divider = (divider, key) => {
      const classes = classNames( "divider", divider.class);
      return (<li key={key} className={ classes }></li>);
    };

    // nav label with nav link
    const navLabel = (item, key) => {
      const classes = {
        item: classNames( "hidden-cn", item.class ),
        link: classNames( "nav-label", item.class ? item.class : ""),
        icon: classNames(
          !item.icon ? "fa fa-circle" : item.icon ,
          item.label.variant ? `text-${item.label.variant}` : "",
          item.label.class ?  item.label.class : ""
        )
      };
      return (
        navLink(item, key, classes)
      );
    };

    // nav item with nav link
    const navItem = (item, key) => {
      let classes = {
        item: classNames( item.class) ,
        link: classNames( "nav-link", item.variant ? `nav-link-${item.variant}` : ""),
        icon: classNames( item.icon ),
      };
      if(item.onClick) {
        classes["onClick"] = item.onClick;
      }
      return (
        navLink(item, key, classes)
      );
    };

    const translate = (item) => {
      const { t } = this.props;
      return !isUndefined(item.translatable) ? item.name : t("sidebar." + camelCase(item.name));
    };

    // nav link
    const navLink = (item, key, classes) => {
      const url = item.url ? item.url : "";
      return (
        <NavItem key={key} className={classes.item}>
          { isExternal(url) ?
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon}></i>
              {translate(item)}
              {badge(item.badge)}
            </RsNavLink>
            :
            <NavLink to={url} className={classes.link} activeClassName="active" onClick={classes.onClick ? classes.onClick : this.hideMobile}>
              <i className={classes.icon}></i>
              {translate(item)}
              {badge(item.badge)}
            </NavLink>
          }
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = (item, key) => {
      return (
        <li key={key} className={this.activeRoute(item.url, props)}>
          <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>
            {translate(item)}
          </a>
          <ul className="nav-dropdown-items">
            {navList(item.children)}
          </ul>
        </li>);
    };

    // nav type
    const navType = (item, idx) =>
      item.title ? title(item, idx) :
      item.divider ? divider(item, idx) :
      item.label ? navLabel(item, idx) :
      item.children ? navDropdown(item, idx)
                    : navItem(item, idx) ;

    // nav list
    const navList = (items) => {
      return items.map( (item, index) => navType(item, index) );
    };

    const isExternal = (url) => {
      const link = url ? url.substring(0, 4) : "";
      return link === "http";
    };

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader/>
        <SidebarForm/>
        <nav className="sidebar-nav">
          <Nav>
            {navList(nav.items)}
          </Nav>
        </nav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </div>
    );
  }
}

Sidebar.propTypes = {
  fetchMyEstablishmentList: PropTypes.func,
  myEstablishments: PropTypes.object,
  toggleModal: PropTypes.func,
  t: PropTypes.func
};

export default compose(connect(mapStateToProps, mapDispatchToProps), translate("translations"))(Sidebar);