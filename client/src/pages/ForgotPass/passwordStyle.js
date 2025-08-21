import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background:var(--primary-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  height: 800px;
  position: relative;
  z-index: 1;
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: var(--primary-green);
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background: var(--secondary-black);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: var(--primary-green);
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--primary-green);
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-black);
  color: var(--primary-green);
`
export const FormButton = styled.button`
  background: var(--primary-green);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: var(--primary-black);
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--secondary-green);
  }
`
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: var(--primary-green);
  font-size: 14px;
`
