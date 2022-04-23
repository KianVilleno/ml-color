import React from "react";
import Head from "next/head";

const Seo = ({ title, description, image, canonical, isHome }) => {
  const domain = "";
  const siteName = "Sky Discovery";

  const canonicalFull = canonical ? `${domain}${canonical}` : null;
  let pageTitle = title;
  if (!title) pageTitle = siteName;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        {description && <meta name="description" content={description} />}
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={pageTitle} />
        {description && (
          <meta
            name="og:description"
            property="og:description"
            content={description}
          />
        )}
        <meta property="og:site_name" content={siteName} />
        {canonicalFull ? (
          <meta property="og:url" content={canonicalFull} />
        ) : null}
        <meta
          name="twitter:card"
          content={`${image ? "summary_large_image" : "summary"}`}
        />
        <meta name="twitter:title" content={pageTitle} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}

        {image ? <meta property="og:image" content={image} /> : null}
        {image ? <meta name="twitter:image" content={image} /> : null}
        {canonicalFull ? <link rel="canonical" href={canonicalFull} /> : null}
      </Head>
    </>
  );
};

export default Seo;
