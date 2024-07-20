// import { useState } from "react"
import minus from './assets/Minus.svg'
import plus from './assets/Plus.svg'
import styles from './Count.module.scss'

const Count = () => {

    // const [count,setCount] = useState(0) 
    
    // const CountMinus = () => { 
    //     setCount(count - 1)
    // }
    // const CountPlus = () => { 
    //     setCount(count + 1)
    // }

    return ( 
        <div className={styles.count}>
            <div className={styles.display}>

                <div>
                    <button className={styles.buttonMinus}><img src={minus} alt="" /></button>
                </div>

                <div>
                    <input type="text"/>
                </div>

                <div>
                    <button className={styles.buttonPlus}><img src={plus} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Count