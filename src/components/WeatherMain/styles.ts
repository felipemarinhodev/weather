import media from 'styled-media-query'

import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Img = styled.img``

export const WrapperMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray};
    margin: 0 ${theme.spacings};
    ${media.lessThan('large')`
      flex-direction: column;
    `}
  `}
`

export const WrapperLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
  `}
`

export const WrapperTempVariant = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
    display: flex;
    font-size: ${theme.font.sizes.small};

    .tempMax {
      color: ${theme.colors.red};
      border-right: 1px solid ${theme.colors.lightGray};
      padding-right: ${theme.spacings.xxsmall};
    }
    .tempMin {
      color: ${theme.colors.blue};
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const WrapperTemp = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.xxlarge};

    h1 {
      border-radius: 5px;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
      margin: ${theme.spacings.xxsmall} ${theme.spacings.small};
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
    }
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
  `}
`
