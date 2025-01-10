import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
