import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title data-rh="true">{`${title}`}</title>
    </Helmet>
  );
};

export default MetaData;
