import React from 'react';
import AutoSuggest from '../shared/AutoSuggest';

function Home (props) {
  return (
    <div>
      <AutoSuggest school="marianopolis" inputType="school" />
    </div>
  );
}

export default Home;
