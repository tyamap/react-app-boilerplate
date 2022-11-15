import { Helmet } from "react-helmet";

interface HeadProps {
  title: string;
}
const Head = (props: HeadProps) => {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="this site is ..." />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
      ></meta>
      {/* OGP ここから */}
      <head prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content="OGPに掲載するページのURL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="OGPに掲載するページタイトル" />
      <meta property="og:description" content="OGPに掲載する説明文" />
      <meta property="og:site_name" content="OGPに掲載するサイト名" />
      <meta property="og:image" content="OGPに掲載する画像" />
      {/* OGP ここまで */}
    </Helmet>
  );
};

export default Head;
