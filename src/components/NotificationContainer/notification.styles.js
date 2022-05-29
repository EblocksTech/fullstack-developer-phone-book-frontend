import styled, { css } from 'styled-components';

const containNotes = props => {
  if(props.notes.length > 0)
    return displayFlex
}

const displayFlex = css`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: none;
  flex-direction: column;
  pointer-events: none;
  ${containNotes}
`;