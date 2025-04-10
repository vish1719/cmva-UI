import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, path, keywords  }) => {
  const baseUrl = "https://connectmyva.com";
  const url = `${baseUrl}${path}`;
  const image = `${baseUrl}/assets/img/logo1.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ConnectMyVA" />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default Seo;
