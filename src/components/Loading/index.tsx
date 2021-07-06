import * as S from './styles'

const Loading = () => (
  <S.WrapperLoading>
    <S.Title>Carregando</S.Title>
    <S.Wrapper>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Wrapper>
  </S.WrapperLoading>
)

export default Loading
