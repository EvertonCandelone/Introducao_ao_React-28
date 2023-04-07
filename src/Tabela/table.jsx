import styles from "./table.module.css";

const Tabela = () => {
    return (
        <div class="container" className={styles.container}>
        <thead className={styles.thead}>
            <tr className={styles.tr}>
                <th className={styles.th}>
                    <p>IMC</p>
                </th>
                <th className={styles.th}>
                    <p> Menor que 20</p>
                </th>
                <th className={styles.th}>
                    <p>Abaixo do Peso</p>
                </th>
            </tr>
            <tr className={styles.tr}>
                <th className={styles.th}>
                    <p>IMC</p>
                </th>
                <th className={styles.th}>
                    <p> Maior ou = 20 </p>
                </th>
                <th className={styles.th}>
                    <p>Peso Ideal</p>
                </th>
            </tr>
            <tr className={styles.tr}>
                <th className={styles.th}>
                    <p>IMC</p>
                </th>
                <th className={styles.th}>
                    <p>Maior ou = 30</p>
                </th>
                <th className={styles.th}>
                    <p>Acima do Peso</p>
                </th>
            </tr>
        </thead>
        </div>
    )
}

export default Tabela;