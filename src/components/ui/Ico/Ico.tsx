import styles from './Ico.module.scss'

interface IcoProps{
    img: string,
    color?: string
}

const Ico = ({img, color = "white"} : IcoProps) => {
    return (
        <>
        <div 
            className={styles.IcoBlock}
            style={{background: color}}
        >
            <img src={img} alt="" />
        </div>
        </>
    );
}
 
export default Ico;