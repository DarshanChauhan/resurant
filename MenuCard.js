import React from 'react'

const menuCard = ({menuData}) => {
   
    return (
        <>
        <section className = "main-card--container">
        {menuData.map((curElem)  =>  {
            return(
                <>
                <div className ="card-container" key={curElem.id}>  
                <div className = "card" >
                    <div className ="card-body">
                        <span className ="card-number card-circle subtle">{curElem.id}</span>
                        <span className ="card-author subtle">{curElem.name}</span>
                        <h2 className ="card-title"> {curElem.name}</h2>
                        <span className ="card-description subtle"> 
                        {curElem.description}
                        i love meggi , mne bav bhave che ,
                        jon tmne bhavti hoy k na hoy to pan like kari 
                        do nakar nahi maja </span>
                        <div className ="card-read">read</div>
                        <img src={curElem.image}alt="images" className ="card-media"/>
                        <span className="card-tag subtle">Order Now</span>
                      </div> 
                 </div>
            </div> 
           </>
            );
        })}
        </section>
    </>
    )
}

export default menuCard;
