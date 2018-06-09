export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
    },
    {
      name: "Campaigns",
      url: "/campaigns/list",
      icon: "fa fa-list"
    },
    {
      name: "CampaignsDev",
      url: "/campaigns/list",
      icon: "fa fa-list",
      children: [
        {
          name: "BidCampaign",
          url: "/campaigns/46/bid",
          icon: "icon-layers",
        },
        {
          name: "ConfigCampaign",
          url: "/campaigns/46/config",
          icon: "fa fa-upload"
        },
        {
          name: "AnalyticsCampaign",
          url: "/campaigns/46/analytics",
          icon: "fa fa-upload"
        }
      ]
    },
    {
      name: "Establishments",
      icon: "fa fa-building"
    },
    {
      name: "Log Out",
      url: "/logout",
      class: "mt-auto",
      icon: "fa fa-sign-out",
      variant: "danger"
    }

  ]
};
