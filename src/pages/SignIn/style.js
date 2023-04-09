import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 20px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100%-56%);
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #B4262A;
  border: 1px solid #373737;
  padding: 10px 40px;
  border-radius: 10px;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  padding: 4px;
`;

export const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: white;
`;

export const Button = styled.button`
  border-radius: 6px;
  border: none;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: #F2E9E9;
  color: #B4262A;
`;

export const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: #aaaaaa;
`;

export const Links = styled.div`
  margin-left: 50px;
`;

export const Link = styled.span`
  margin-left: 30px;
`;
