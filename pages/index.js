import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled("div")`
    background: #eee;
    width: 100%
    height: 100vh;
    font-family: sans-serif;
`;

const Index = () => {
  return (
    <Wrapper>
      <h1>Hello</h1>
      <Link href="/demo">
        <a>Demo</a>
      </Link>
    </Wrapper>
  );
};

export default Index;
