import { getRepos } from 'github-repos-search-trial-pkg';
import React from 'react';
import './App.css';

function App() {
  getRepos().then((repositories) => console.log(repositories));

  return (
      <div className="App">
        <h2>Open browser console to see the output.</h2>
      </div>
  );
}
export default App;