import React from 'react';
//@ts-ignore
import preloader from './../../../assets/images/preloader.gif';
//@ts-ignore
import s from './Preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={s.preloader}><img src={preloader} alt="preloader" /></div>
    );
};

export default Preloader;