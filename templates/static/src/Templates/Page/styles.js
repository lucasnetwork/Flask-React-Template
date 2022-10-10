import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 5rem;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex: 1;

  > div {
    width: 100%;
    max-width: 900px;
  }
`;
