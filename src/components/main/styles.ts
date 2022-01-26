import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-basis: 100%;

  div {
    position: relative;
    width: 100%;
    text-align: center;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% -8%;

    img {
      position: absolute;
      top: 60%;
      right: 10%;
      transform: translateY(-60%);
      filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, .5));
    }
  }
`