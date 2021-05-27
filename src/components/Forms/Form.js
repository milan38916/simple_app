import { useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './Form.module.css';

const Form = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [address, setAddress] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const uploadBtn = useRef();


    const NameHandler = (data) => {
        setName(data.target.value);
    };
    const SurNameHandler = (data) => {
        setSurName(data.target.value);
    };
    const AddressHandler = (data) => {
        setAddress(data.target.value);
    };
    const TextHandler = (data) => {        
        setText(data.target.value);
    };
    const ImageHandler = (data) => {
        setImage(URL.createObjectURL(data.target.files[0]));
    };


    const SubmitFormHandler = (data) => {
        data.preventDefault();

        const id = Math.random();
        const date = new Date();
        const stringDate = date;
        //const stringDate = new Intl.DateTimeFormat("sk-SK").format(date)
        props.onAddNewItem({id, name, surname, address, text, image, stringDate});

        setName('');
        setSurName('');
        setAddress('');
        setText('');
        setImage('');
        

    };

    const uploadImageHandler = () => {
        uploadBtn.current.click();
    };

    return (
        <Card className={styles.form}>
            <h1>Pridanie podnetu</h1>
            <form onSubmit={SubmitFormHandler}>
                <label htmlFor="name">Meno</label>
                <input id="name" type="text" onChange={NameHandler} value={name}/>
                <label htmlFor="surname">Priezvisko</label>
                <input id="surname" type="text" onChange={SurNameHandler} value={surname}/>
                <label htmlFor="address">Adresa</label>
                <input id="address" type="text" onChange={AddressHandler} value={address}/>
                <label htmlFor="text">Popis</label>
                <input id="text" type="text" onChange={TextHandler} value={text}/>
                <button type="button" onClick={uploadImageHandler}>Nahrať obrázok</button>
                <input ref={uploadBtn} type="file" onChange={ImageHandler}/>
                <button type="submit">Odoslať</button>
            </form>
        </Card>
    );
};

export default Form;