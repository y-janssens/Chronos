import { useMemo } from 'react';
import css from '../styles/styles.module.css';

const YearItem = ({ item, form, index, handleSelect, selectedItem }) => {
    const { colors, availableYears, selectedColor } = form;

    const selected = useMemo(() => {
        return selectedItem === item;
    }, [selectedItem, item]);

    const color = useMemo(() => {
        return selected ? selectedColor : colors[index];
    }, [index, colors, selected, selectedColor]);

    return (
        <div
            key={index}
            onClick={() => handleSelect(item)}
            style={{ backgroundColor: color }}
            className={
                index === 0
                    ? `${css['timeline-slot']} ${css['slot-first']}`
                    : index === availableYears.length - 1
                    ? `${css['timeline-slot']} ${css['slot-last']}`
                    : css['timeline-slot']
            }
        >
            {item}
        </div>
    );
};
export default YearItem;
