import { useMemo } from 'react';
import css from '../../styles/styles.module.css';

export default function YearItem({ item, form, index, handleSelect, selectedItem }) {
    const selected = useMemo(() => {
        return selectedItem === item;
    }, [selectedItem, item]);

    const color = useMemo(() => {
        if (!selected) {
            return form.colors[index];
        }
        return form.selectedColor;
    }, [index, form, selected]);

    return (
        <div
            key={index}
            onClick={() => handleSelect(item)}
            style={{ backgroundColor: color }}
            className={
                index === 0
                    ? `${css['timeline-slot']} ${css['slot-first']}`
                    : index === form.availableYears.length - 1
                    ? `${css['timeline-slot']} ${css['slot-last']}`
                    : css['timeline-slot']
            }
        >
            {item}
        </div>
    );
}
