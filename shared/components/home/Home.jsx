import React from 'react';

import Header from '../shared/Header/Header';
import AutoSuggest from '../shared/AutoSuggest';

function Home (props) {
  return (
    <div>
      <Header />
      <AutoSuggest school="marianopolis" inputType="school" />
    </div>
  );
}

export default Home;
