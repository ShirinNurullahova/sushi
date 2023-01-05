import React,{useRef} from 'react'
import styles from '../../styles/Gallery.module.scss'
import sushi3 from '../../public/sushi3.png'
import sushi4 from '../../public/sushi4.png'
import Image from "next/image"
import GetInTouch from '../UI/GetInTouch'

const GalleryThree = () => {
    
    return (
        <>
        <div className={` ${styles.galleryThree}`}>
            <div className={` ${styles.galleryThree_div}`}>
                <p>GALLERY</p>
            </div>
            <div className={` ${styles.galleryThree_bottom}`}>
                <div className={` ${styles.galleryThree_bottom_left}`}>
                    <Image src={sushi3} />
                </div>
                <div className={` ${styles.galleryThree_bottom_right}`}>
                    <div className={` ${styles.galleryThree_bottom_right_img}`}>
                        <Image src={sushi4} />
                    </div>
                    <div className={` ${styles.galleryThree_bottom_right_p}`}>
                        <p>Cum sodales posuere faucibus accumsan at netus in.
                            Velit donec massa varius aliquam id porttitor condimentum ultrices mattis. Nisl et,
                            volutpat lectus nibh vitae a bibendum bibendum.
                            Imperdiet quisque quis nibh facilisi arcu amet, condimentum in. </p>
                    </div>
                </div>
            </div>
        </div>
        <GetInTouch/>
        </>
    )
}

export default GalleryThree