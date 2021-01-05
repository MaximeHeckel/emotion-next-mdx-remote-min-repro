import styled from "@emotion/styled";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

const Test = styled("div")`
  background: blue;
  height: 50px;
  width: 200px;
`;

const components = { Test };

export default function Demo({ source }) {
  const content = hydrate(source, { components });
  return (
    <div>
      <h1>Demo</h1>
      {content}
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
Some **mdx** text, with a component

<Test />

Open the dev tools / console and refresh this page to see the error

  `;
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
}
