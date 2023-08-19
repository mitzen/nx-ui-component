import styles from "../../../app/product/styles.module.css";
export const ProductTitle = ({ title, description }: { title : string, description : string}) => {
    return <div className={styles.product}>
     <ul>
        <li className={styles.productInfo}> {title} </li>
        <li className={styles.productDescription}> {description}</li>
      </ul>
    </div>
}
