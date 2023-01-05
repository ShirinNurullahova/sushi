import React from 'react'
import Card from '../UI/Card'
import Navigator from '../UI/Navigator'

const HomeRec = (props) => {
  return (
    <section className='home-rec-section'>
      <Navigator>
        <p>Recommended</p>
      </Navigator>

      <div className="home-rec-container p-135 d-flex-justify align-center">
        {props.data && props.data.map(item => {
          return(
            <Card key={item.id} item={item}/>
          )
        })}
      </div>
    </section>
  )
}

export default HomeRec