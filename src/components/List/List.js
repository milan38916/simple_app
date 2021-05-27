import React, { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Card from '../../components/UI/Card';
import styles from './List.module.css';

const List = (props) => {

    const [showDetail, setShowDetails] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [actualItemDetails, setActualItemDetails] = useState();
    const [sortList, setSortList] = useState(props.items);

    useEffect(() => {
        if (props.items.length > 0) {
            setIsEmpty(false);
        }
        setSortList(props.items);
        setSortList(sortList => {
            return [...sortList].sort((a,b) => b.stringDate - a.stringDate);
        });

        
    }, [props.items])


    const showDetails = (data) => {
        setActualItemDetails(data);
        setShowDetails(!showDetail);
    };

    const onClose = () => {
        setShowDetails(false);
    };

    return (
        <React.Fragment>
            <Card className={styles.list}>
                {!isEmpty && <ul>
                    {sortList.map(item => (
                                console.log(),
                        <Card key={item.id} className={styles.card}>
                            <li onClick={() => showDetails(item)}>
                                <section>
                                    <p>Meno: {item.name}</p>
                                    <p>Priezvisko: {item.surname}</p>
                                    <p>Adresa: {item.address}</p>
                                </section>
                                <div>
                                    <img alt="image" src={item.image}/>
                                </div>
                            </li>
                        </Card>
                    ))}
                </ul>}
                {isEmpty && <p>List is empty!!!</p>}
            </Card>
            {showDetail && <Modal details={actualItemDetails} onClose={onClose}></Modal>}
        </React.Fragment>
    );
};

export default List;
