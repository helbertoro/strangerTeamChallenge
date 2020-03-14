import React, { useState } from 'react';
import './styles/App.scss';
import Menu from '../components/Menu';
import Main from '../components/Main';
import Card from '../components/Card';
import Search from  '../components/Search';
import axios from 'axios';
const API = 'http://localhost:3001';

function App(){
    const [graphs, setGraphs] = useState([]);

    const getData = async () => {
        const results = await axios.get(`${API}/graphs`);
        if (graphs && graphs.length > 0) {
            results.data[0].id = `${graphs.length}`;
            results.data[0].name = `${results.data[0].name}${graphs.length}`;
            const aux = results.data.concat(graphs);
            setGraphs(aux);
        } else {
            setGraphs(results.data);
        }
    }

    return (
        <div className="container">
            <Menu/>
            <Search onclick= { getData }/>
            <Main>
                {
                    graphs && 
                    graphs.map(graph => <Card key = { graph.id } data = { graph.data } title = {graph.name}/>)
                }
            </Main>
        </div>
    );
}

export default App;