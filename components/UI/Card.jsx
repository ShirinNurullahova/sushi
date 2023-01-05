import React from 'react'
import Image from "next/image"

const Card = (props) => {
    console.log(props);
    return (
        <div className='card'>
            <div className="card-img">
                <Image src={props.item.img} width="370" height={220} alt={`${props.item.title}`} />
            </div>

            <div className="card-container d-flex-justify">

                <div className="card-text">

                    <div className="card-title">
                        <p>
                            {props.item.title}
                        </p>
                    </div>

                    <div className="card-desc">
                        <p>
                            {props.item.details}
                        </p>
                    </div>

                </div>


                <div className="card-price">
                    <p>AZN {props.item.price}</p>
                </div>
            </div>

            <div className="card-buttons d-flex-justify align-center">

                <div className="card-button-left">
                    <button className='card-btn d-flex justify-center align-center'>
                        <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="20" y2="1" stroke="#B9B9B9" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
                
                <div className="card-count">
                    <p>0</p>
                </div>

                <div className="card-button-right">
                    <button className='card-btn d-flex justify-center align-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="10" x2="20" y2="10" stroke="#4D4D4D" strokeWidth="2" />
                            <path d="M10 0L10 20" stroke="#4D4D4D" strokeWidth="2" />
                        </svg>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card