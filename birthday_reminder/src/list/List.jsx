import React from 'react'
import "./list.css";

export const List = ({data}) => {
    return (
        <div className="list">
           {
                          data.map((item,index)=>{
                              return(
                                  <div className="item" key={index}>
                                      <div className="image"> <img src={item.image} alt="user" style={item.gender==="M"?{border:"4px solid rgb(18, 142, 214)"}:{border:"4px solid pink"}} ></img> </div>
                                      <div className="info">
                                          <div className="name">{item.name}</div>
                                          <div className="age">{item.age} years</div>
                                      </div>
                                  </div>
                              )
                          })
                      }
        </div>
    )
}
