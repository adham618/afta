import React from 'react';

const CardTitleText = (props) => {
  return (
    <div className='card-title-text'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h3>{props.title}</h3>
            {props.desc_list.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTitleText;
