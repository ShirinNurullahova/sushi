import React from 'react'
import Card from '../UI/Card';
import Navigator from '../UI/Navigator'

const HomeNew = (props) => {

  return (
    <section className='home-new-section'>
      <Navigator>
        <p>New</p>
      </Navigator>

      <div className="home-new-container p-135 d-flex-justify align-center">
        {props.data && props.data.map(item => {
          return(
            <Card key={item.id} item={item}/>
          )
        })}
      </div>
    </section>
  )
}

export default HomeNew