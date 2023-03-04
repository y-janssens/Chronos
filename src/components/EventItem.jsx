import { useCallback, useMemo } from 'react';
import css from '../styles/styles.module.css';
import ItemDetails from './ItemDetails';

const EventItem = ({ year, form, setForm, item, index }) => {
    const { selectedItem, colors, selectedColor } = form;

    const selected = useMemo(() => {
        return selectedItem.id === item.id;
    }, [selectedItem, item]);

    const handleSelect = useCallback(() => {
        setForm('selectedItem', item);
    }, [item]);

    const focusItem = useMemo(() => {
        if (!selected) {
            return null;
        }
        return <ItemDetails item={item} />;
    }, [item, selected]);

    const color = useMemo(() => {
        return selected ? selectedColor : colors[index];
    }, [index, colors, selected, selectedColor]);

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
};
export default EventItem;
