import styles from '../page.module.css'

type DetailsProps = { img: string, text: string }

const DetailsGridElement = ({ img, text }: DetailsProps) => {
    return (
        <div className={`col ${styles.detailsGridElement}`}>
            <img src={img} style={{ height: 150, marginBottom: 16 }} />
            {text}
        </div>
    )
}

export default DetailsGridElement