import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: rgba(75, 75, 75, 1);
  box-sizing: border-box;

  .truck-bg {
    position: relative;
    filter: invert(.15);
    width: 30%;
    z-index: 0;
    padding: 10px;
  }

  .logo-main {
    position: absolute;
    width: 10%;
    right: 0;
    top: 5%;
  }

  .header-right {
    background: tan;
    
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Montserrat Alternates', sans-serif;
      width: 100%;
      color: #fff;
      font-size: 65px;
      line-height: 0;
      text-align: center;
      z-index: 1;
    }

    .user {
      position: absolute;
      bottom: 12px;
      right: 15px;
      display: flex;
      align-items: center;

      .user-id {
        margin-right: 10px;

        p {
          font-family: 'Montserrat Alternates', sans-serif;
          font-weight: 500;
          color: white;
          text-align: right;
          letter-spacing: 2px;
          line-height: 3px;
        }

        .user-name {
          font-size: 12px;
        }

        .user-employer {
          font-size: 10px;
          font-weight: 600;
        }
      }


      .user-img {
        width: 45px;
        height: 45px;
        border: 1px solid rgb(125, 125, 125);
        border-radius: 50%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .8);
        overflow: hidden;

        img {
          position: relative;
          width: 250%;
          top: -8px;
          left: -50px;
        }
      }

    }
  }
`
