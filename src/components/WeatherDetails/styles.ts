import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Label as LabelMain } from './../WeatherMain/styles'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    margin: ${theme.spacings.xxsmall};
  `}
`

export const WrapperDetail = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex: 0 auto 0;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${theme.colors.gray};
    padding: 10px 10px;
    width: 100%;
    img {
      width: 2rem;
    }
    ${media.greaterThan('large')`
      max-width: 25rem;
    `}
  `}
`

export const Value = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`

export const Img = styled.img``
export const Label = styled(LabelMain)``
