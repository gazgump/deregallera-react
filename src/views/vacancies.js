import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Vacancies() {

  const [data, setData] = useState([]);

  const url = 'https://deregallera.herokuapp.com/';

  useEffect(() => {
    axios
      .get(`${url}vacancies`)
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));

  }, []);

  console.log(data);

  const listItems = data.map((item) =>
  <div className="vacancy" key={item.id}>
    <h3 className="role">{ item.role }</h3>
    <p className="hours">{ item.hours }</p>
    <p className="manager">{ item.manager }</p>
    <p className="salary">{ item.Salary }</p>
    <div className="info">
      { item.info }
    </div>
    <a href={item.link} className="download-link" target="_blank" rel="noreferrer">Download the full job specification.</a>
    <p className="closing-date">{ item.ClosingDate }</p>
  </div>
  );

  return (
    <div>
      {listItems}
    </div>
  );
}
