import React from "react";
import fetch from "isomorphic-fetch";
import Page from '../layouts/main'

export default function Index({ content }) {
  return (
    <Page>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Page>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch(
    "https://api.importdoc.com/document?id=i0wqW6emFhtB1DOd8Y0i"
  );
  const html = await res.text();
  return { content: html };
};
