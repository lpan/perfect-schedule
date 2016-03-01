import React from 'react';
import AutoSuggest from './AutoSuggest';

function Home (props) {
  return (
    <div>
      <AutoSuggest school="marianopolis" inputType="school" />
    </div>
  );
}

export default Home;
