import React, { FC, ReactElement, useContext } from 'react';
import { Button, Container } from '@mui/material';
import { MobXProviderContext, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const App = (): ReactElement => {
  const { timer } = React.useContext(MobXProviderContext);

  return (
    <Container>
      <Link to={'/index'}>index</Link>
      <Button onClick={() => timer.increase()}>Seconds passed: {timer.secondsPassed}</Button>
    </Container>
  );
};

export default observer(App);
