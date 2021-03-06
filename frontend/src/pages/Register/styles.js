import styled from 'styled-components';
import {Form as Unform} from '@unform/web';

export const Container = styled.div`
  width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
	padding: 96px;
	background: ${props => props.theme.colors.background};
	box-shadow:  0 4px 8px 0 ${props => props.theme.colors.shadow};
	border-radius: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Section = styled.section`
  width: 100%;
	max-width: 380px;
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
	font-size: 32px;
	color: ${props => props.theme.colors.header};
`;

export const Text = styled.p`
  font-size: 18px;
	color: ${props => props.theme.colors.paragraph};
	line-height: 32px;
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 450px;
  
  input {
    margin-top: 8px;
  }

	textarea {
    margin-top: 12px;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;