import React, { useState } from 'react';
import { AppContext } from './contexts/App/index';
import { Main } from './Main';

function UseContext2() {
  return (
    <React.Fragment>
      <AppContext>
        <Main />
      </AppContext>
    </React.Fragment>
  );
}

export default UseContext2;
