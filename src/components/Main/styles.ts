import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.primary}
    color: #fff;
    width: 100vw;
    height: 100vh;
    padding: ${theme.spacings.xxlarge};
    text-align: center;
    min-width: 795px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;

    background: ${lighten(0.2, theme.colors.primary)};
  `}
`

export const WrapperContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 1200px;
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    background: ${lighten(0.2, theme.colors.lightBg)};

    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 35px;
  height: 35px;
  padding: 5px 5px;
  border: none;
  background: transparent;
`
