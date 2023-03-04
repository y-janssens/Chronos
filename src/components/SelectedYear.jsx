import { useMemo, useEffect } from 'react';
import css from '../styles/styles.module.css';
import EventItem from './EventItem';

const SelectedYear = ({ form, setForm }) => {
    const { events, selectedYear, selectedItem } = form;

    const year = useMemo(() => {
        const items = [];
        events.map((item) => {
            if (item.name === 0) {
                items.push(item);
            } else if (item.year === selectedYear) {
                items.push(item);
            }
            return item;
        });
        return items;
    }, [events, selectedYear]);

    useEffect(() => {
        if (year.length > 1 && selectedItem.length < 1) {
            setForm('selectedItem', year[1]);
        }
    }, [year, setForm, selectedItem]);

    return (
        <div className={css['years-container']}>
            <div className={css['year-items-container']}>
                {year.map((item, index) => {
                    return <EventItem key={item.id} form={form} setForm={setForm} year={year} item={item} index={index} />;
                })}
            </div>
        </div>
    );
};
export default SelectedYear;
