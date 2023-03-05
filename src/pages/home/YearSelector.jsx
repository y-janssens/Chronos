import { useCallback } from 'react';
import YearItem from './YearItem';
import css from '../../styles/styles.module.css';

export default function YearSelector({ form, setForm }) {
    const handleSelect = useCallback(
        (item) => {
            const year = form.events.filter((it) => it.origin || it.year === item);
            setForm({
                ...form,
                selectedYear: item,
                yearEvents: year,
                selectedItem: year[1]
            });
        },
        [setForm, form]
    );

    return (
        <div className={css['slots-container']}>
            {form.availableYears.map((item, index) => {
                return <YearItem key={index} form={form} item={item} index={index} handleSelect={handleSelect} selectedItem={form.selectedYear} />;
            })}
        </div>
    );
}
