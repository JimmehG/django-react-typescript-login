/**
 *
 * NavBar
 *
 */

import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { LoginForm as Login } from '../LoginForm';
import { LoggedInUser } from './components/LoggedInUser';
import { PageWrapper } from '../../components/PageWrapper';
import { useAuth } from 'utils/use-auth';

export function NavBar() {
  const { isAuthenticated } = useAuth();
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        {isAuthenticated ? <LoggedInUser /> : <Login />}
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
