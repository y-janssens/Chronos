import { useCallback } from 'react';
import YearItem from './YearItem';
import css from '../styles/styles.module.css';

const YearSelector = ({ form, setForm }) => {
    const { availableYears, selectedYear } = form;

    const handleSelect = useCallback(
        (item) => {
            setForm({ ...form, selectedYear: item, selectedItem: [] });
        },
        [setForm, form]
    );

    return (
        <div className={css['slots-container']}>
            {availableYears.map((item, index) => {
                return <YearItem key={index} form={form} item={item} index={index} handleSelect={handleSelect} selectedItem={selectedYear} />;
            })}
        </div>
    );
};
export default YearSelector;
