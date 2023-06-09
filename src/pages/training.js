import Header from "@/components/common/header";
import Training from "@/components/layout/training/training";

import styled from "styled-components";

export default function training() {
  return (
    <Container>
      <Header />
      <Training></Training>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
