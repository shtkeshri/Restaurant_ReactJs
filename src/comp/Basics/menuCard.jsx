import React from 'react';

const menuCard = ({menuData}) => {
    
             return (
        <> 
            <section className="main-card--cointainer">
             {menuData.map((e)=> {
                 return (
                <>
                <div className="card-container" key={e.id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtitle">{e.id}</span>
                      <span className="card-author subtle" > {e.name} 
                      </span>
                      <span className="class-description subtle">
                        {e.description}
                      </span>
                      <div className="card-read"> Read</div>
                    </div>
                   <img src={e.image} alt="images" className="card-media"></img>
                    <span className="card-tag subtle"> Order Now</span> 
                  </div>
                </div>
                </>
                 );
             })}

</section>
        </>
    );
      
};

export default menuCard;
