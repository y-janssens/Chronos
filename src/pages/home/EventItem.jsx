import { useCallback, useMemo } from 'react';
import ItemDetails from './ItemDetails';
import css from '../../styles/styles.module.css';

export default function EventItem({ year, form, setForm, item, index }) {
    const selected = useMemo(() => {
        return form.selectedItem.id === item.id;
    }, [form, item]);

    const handleSelect = useCallback(() => {
        setForm('selectedItem', item);
    }, [setForm, item]);

    const focusItem = useMemo(() => {
        if (!selected) {
            return null;
        }
        return <ItemDetails item={item} />;
    }, [item, selected]);

    const color = useMemo(() => {
        if (!selected) {
            return form.colors[index];
        }
        return form.selectedColor;
    }, [index, form, selected]);

    const style = useMemo(() => {
        if (index === 0) {
            return `${css['timeline-slot']} ${css['slot-first']} ${css['year-item']}`;
        }
        if (index === year.length - 1) {
            return `${css['timeline-slot']} ${css['slot-last']} ${css['year-item']}`;
        }
        return `${css['timeline-slot']} ${css['year-item']}`;
    }, [index, year]);

    return (
        <>
            <div onClick={handleSelect} style={{ backgroundColor: color }} className={style}>
                {item.date}
            </div>
            {focusItem}
        </>
    );
}
