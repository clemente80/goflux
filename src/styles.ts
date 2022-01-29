import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 640px;
  background: #000;
  box-sizing: border-box;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 20px 50px rgba(255,255, 255, .15);
  border: 1px solid rgb(35, 35, 35);
  overflow: hidden;
`