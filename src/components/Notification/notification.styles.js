import styled, { css } from 'styled-components';


const error = css`
  background-color: #e55039;
`;

const info = css`
  background-color: #4285f4;
`;


const getNoteType = props => {
  if(props.level === "error"){
    return error;
  }
  return info;
}

export const ContentContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${getNoteType}
`;

export const Title = styled.span`
 font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: white;
  padding-top: 5px;
  font-weight: bolder;
`;

export const Message = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  font-size: 16px;
  font-weight: 30px;
  color: white;
  padding-top: 5px;
`;


