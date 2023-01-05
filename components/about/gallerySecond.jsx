import React,{useRef} from 'react'
import styles from '../../styles/Gallery.module.scss'
import sushi1 from '../../public/sushi1.png'
import sushi2 from '../../public/sushi2.png'
import Image from "next/image"
import GalleryThree from './GalleryThree'

const GallerySecond = React.forwardRef((props,ref) => {
    return (
        <>
            <div className={` ${styles.gallerySecond}`} ref={ref}>
                <div className={` ${styles.gallerySecond_left}`}>
                    <div className={` ${styles.gallerySecond_left_img}`}>
                        <Image src={sushi1} />
                    </div>
                    <div className={` ${styles.gallerySecond_left_p}`}>
                        <p>Cum sodales posuere faucibus accumsan at netus in.
                            Velit donec massa varius aliquam id porttitor condimentum ultrices mattis.
                            Nisl et, volutpat
                            lectus nibh vitae a bibendum bibendum.
                            Imperdiet quisque quis nibh facilisi arcu amet, condimentum in. </p>
                    </div>
                </div>
                <div className={` ${styles.gallerySecond_right}`}>
                    <Image src={sushi2} />
                </div>
            </div>
            <GalleryThree/>
        </>
    )
})

export default GallerySecond