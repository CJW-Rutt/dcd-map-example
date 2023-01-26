/**
 * @author      Corey J. Rutt
 * @version     1.0
 * 
 * @description A function for displaying employee information.
 * @returns     Employee data based off internal data.
 */

import styles from '../../styles/About.module.css'

export default function Employee({
    firstName="none",
    lastName="none",
    colour="white",
    position= "none",
    font="16px",
    fontColor="Blue",
    bio="none",
    image="vanilla_ice.jpg"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font, color:fontColor}} className={styles.employee_container} > 
            <div className={styles.person_image}>
                {
                        lastName.toLowerCase() === "rutt"     ?     <img src='/fearlessleader.jpg' width='300' /> :
                        lastName.toLowerCase() === "hammer"   ?     <img src='/hammertime.jpg' width='300' /> :
                                                    <img src={image} width='300' />
                }
            </div>
            <div className={styles.name_field}>
                <h2>{firstName} {lastName}</h2>
                <h3>{position}</h3>
                <p>{bio}</p>
            </div>
        </div>
    )
}