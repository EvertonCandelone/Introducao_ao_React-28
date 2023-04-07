import { useState } from "react";
import styles from './formulario.module.css';

const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let IMC = peso / (altura * altura);


    const media = () => {
        const resultado = IMC;

        if (resultado >= 30) {
            return (
                <p>Obesidade</p>
            )
        }
 
        if (resultado < 20) {
            return (
                <p>Abaixo do Peso</p>
            )
        }

        if (resultado >= 20) {
            return (
                <p>Peso Ideal</p>
            )
        }
    }
 
    return (
        <form className={styles.form}>
            <label className={styles.label}>Informe seu peso (kg)</label><br />
            <input className={styles.input} type="number" placeholder="Seu Peso" onChange={evento => setPeso(evento.target.value)} /><br />
            <label className={styles.label}>Informe sua altura (metro e cm)</label><br />
            <input className={styles.input} type="number" placeholder="Sua Altura" onChange={evento => setAltura(evento.target.value)} />
            <p className={styles.label}>Seu IMG é : {IMC}</p>
             {media()}

        </form>
    )
}

export default Formulario;