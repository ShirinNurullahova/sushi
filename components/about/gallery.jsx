import React,{useRef} from 'react'
import styles from '../../styles/Gallery.module.scss'
import man from '../../public/man.png'
import man2 from '../../public/man2.png'
import down from '../../public/down.png'
import GallerySecond from './GallerySecond.jsx'
import Image from "next/image"

const Gallery = () => {
    const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return (
        <>
            <div className={` ${styles.gallery_page}`}>
                <div className={` ${styles.gallery_page_down}`} onClick={handleClick}>
                    <Image src={down} />
                </div>

                <div className={` ${styles.gallery_page_element}`}>
                    <div className={` ${styles.gallery_page_element_left} d-flex flex-column`}>
                        <p>Name Surname</p>
                        <div className={` ${styles.gallery_page_element_left_img}`}>
                            <Image
                                src={man} />
                        </div>
                    </div>
                    <div className={` ${styles.gallery_page_element_right}`}>
                        <p>
                            Cum sodales posuere faucibus accumsan at netus in.
                            Velit donec massa varius aliquam id porttitor condimentum
                            ultrices mattis. Nisl et, volutpat lectus nibh vitae a bibendum
                            bibendum. Imperdiet quisque quis nibh facilisi arcu amet, condimentum
                            in. Consequat est sociis mattis amet donec vulputate sed nibh blandit.
                            In neque, dolor sit quis nisl bibendum posuere. Amet leo ultricies euismod varius eget arcu ut eu sed.
                            Vitae enim, aliquam molestie etiam. Velit in porttitor at ullamcorper. Blandit ultricies mattis morbi amet et nisi, nisi.
                            Sit integer mi dui tincidunt volutpat in imperdiet dui.
                        </p>
                    </div>
                </div>

                <div className={` ${styles.gallery_page_bottom}`}>

                    <div className={` ${styles.gallery_page_bottom_left}`}>
                        <p>
                            Cum sodales posuere faucibus accumsan at netus in.
                            Velit donec massa varius aliquam id porttitor condimentum
                            ultrices mattis. Nisl et, volutpat lectus nibh vitae a bibendum
                            bibendum. Imperdiet quisque quis nibh facilisi arcu amet, condimentum
                            in. Consequat est sociis mattis amet donec vulputate sed nibh blandit.
                            In neque, dolor sit quis nisl bibendum posuere. Amet leo ultricies euismod varius eget arcu ut eu sed.
                            Vitae enim, aliquam molestie etiam. Velit in porttitor at ullamcorper. Blandit ultricies mattis morbi amet et nisi, nisi.
                            Sit integer mi dui tincidunt volutpat in imperdiet dui.
                        </p>
                    </div>
                    <div className={` ${styles.gallery_page_bottom_right} d-flex flex-column`} >
                        <p>Name Surname</p>
                        <div className={` ${styles.gallery_page_bottom_right_img}`}>
                            <Image
                                src={man2} />
                        </div>
                    </div>

                </div>
            </div>
            <GallerySecond ref={ref} />
        </>
    )
}
export default Gallery