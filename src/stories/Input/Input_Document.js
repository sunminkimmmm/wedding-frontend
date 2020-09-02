import React from 'react';
import { Container, WPInput } from '../../components';

const Input_Document = () => {
  return (
    <Container padding pageHistory={[]}>
      <h1>Input 컴포넌트 문서</h1>
      <WPInput
        value={sampleValue}
        onChange={sampleChance}
        placeholder="Input 컴포넌트"
      />
    </Container>
  );
};

export default Input_Document;
