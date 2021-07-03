import React from 'react';
import './styles/Card.scss';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

function Card({ title, data }){
    return (
        <div className="card">
          <header>
            <h5>{ title }</h5>
          </header>
          <div className="container">
            <AreaChart
              width={350}
              height={250}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </div>
        </div>
    );
}

export default Card;