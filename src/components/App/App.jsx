import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

function App(){
    const [isEx,setisEx] = React.useState(true);
    const [sug,setSug] = React.useState([]);

    function handleChange(input){
        setisEx(!(input));
        !input?setSug([]):setSug(name(input));
    }


    return (
    <div>
    <Header isEx = {isEx} /> 
    <SearchBox handleChange={handleChange}/>
    <ResultsContainer sug={sug}/>
    </div>);
}
export default App;