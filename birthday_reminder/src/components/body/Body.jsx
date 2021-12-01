import React, { useState } from 'react'
import "./body.css";
import {data} from '../../api/data';
import { List } from '../../list/List';
export const Body = () => {
    const [bdata,setBdata]=useState(data);
    return (
        <>
          <div className="b-container">
              <div className="bc-body">
              <div className="title">Birthday Reminder App</div>
                  <div className="content">
                      <p className="b-count"><b>{bdata.length}</b> {bdata.length>1?"birthdays":"birthday"} today</p>
                      
                      <List data={bdata} />
                      
                  </div>
                  <button type="submit" onClick={()=>setBdata([])}>Clear</button>
                  {console.log(`after button click data : ${bdata}`)}
              </div>
              </div>  
        </>
    )
}
