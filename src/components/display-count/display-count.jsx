import style from './display-count.module.css';

const DisplayCount = ({count, className}) => (
    <span className={style.count + ' ' + className}>{count}</span>
);

export default DisplayCount;