import Card from "../../components/UI/Card";
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

const ModalWindow = (props) => {
    return (
        <div className={styles.background}>
            <Card className={styles.modal}>
                <h1>Detaily podnetu</h1>
                <p><strong>Meno:</strong> {props.item.name}</p>
                <p><strong>Priezvisko:</strong> {props.item.surname}</p>
                <p><strong>Adresa:</strong> {props.item.address}</p>
                <p><strong>Správa:</strong> {props.item.text}</p>
                <p><strong>Dátum:</strong> {props.item.stringDate.getDate()}.{props.item.stringDate.getMonth() + 1}.{props.item.stringDate.getFullYear()}</p>
                <div>
                    <img alt="image" src={props.item.image}/>
                </div>
                <button onClick={props.onClose}>Zavrieť</button>
            </Card>
        </div>
    );
};

const Modal = (props) => {
    return (
        ReactDOM.createPortal(<ModalWindow onClose={props.onClose} item={props.details}>{props.children}</ModalWindow>,document.getElementById('modal'))
    );
};

export default Modal;