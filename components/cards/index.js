/**
 * @author      Corey J. Rutt
 * @version     1.0
 * 
 * @description A function for displaying icons related to what color is set to color.
 * @returns     An icon depending on the color value.
 */

import styles from '../../styles/Component.module.css'

export default function Card({
    degree="none",
    colour="white",
    font="16px",
    description="none",
    department="none",
    fontColor="Black",
    image="icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font, color:fontColor}} className={styles.course_container}> 
            <div className={styles.course_image}>
                {
                        department==="Business" ?    <img src='/business.jpg' width='50' /> :
                        department==="Computing" ?   <img src='/computers.jpg' width='50' /> :
                                                    <img src={image} width='50' />
                }
            </div>
            <div className={styles.degree_container}>
                <div className={styles.degree_name}>
                    {
                        department==="Business" ?    <img src='icon/person.png' width='50' /> :
                        department==="Computing" ?   <img src='icon/personThree.png' width='50' /> :
                                            <img src={image} width='50' />
                    }
                    <h2>{degree}</h2>
                </div>        
                <p>{description}</p>
            </div>
        </div>
    )
}