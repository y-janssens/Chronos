import { useMemo, useState } from 'react';
import css from '../../styles/styles.module.css';

export default function ItemDetails({ item }) {
    const [selected, setSelected] = useState(Object.keys(item)[4]);

    const date = useMemo(() => {
        if (!item.origin) {
            return `- ${item.date} ${item.year} -`;
        }
        return `- ${item.date} -`;
    }, [item]);

    const links = useMemo(() => {
        return Object.entries(item).map(
            (link, index) =>
                link[1].length > 0 &&
                link[0] !== 'title' &&
                link[0] !== 'date' && (
                    <span key={index} onClick={() => setSelected(link[0])} style={selected === link[0] ? { color: '#e3d5ca' } : { color: '#938471' }}>
                        {(link[0] === 'description' && 'Description') ||
                            (link[0] === 'details' && 'Détails') ||
                            (link[0] === 'consequences' && 'Conséquences') ||
                            (link[0] === 'links' && 'Liens')}
                    </span>
                )
        );
    }, [item, selected]);

    const renderContent = useMemo(() => {
        if (selected === 'description') {
            return <div className={css['item-hover-content-details']}>{item.description}</div>;
        }

        if (selected === 'details') {
            if (item.details.length < 1) {
                return null;
            }
            return <div className={css['item-hover-content-details']}>{item.details}</div>;
        }

        if (selected === 'consequences') {
            if (item.consequences.length < 1) {
                return null;
            }
            return <div className={css['item-hover-content-details']}>{item?.consequences}</div>;
        }

        if (selected === 'links') {
            if (item.links.length < 1) {
                return null;
            }
            return (
                <div className={css['item-hover-content-details']}>
                    <ul>
                        {item.links.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.text} target="_blank" rel="noreferrer">
                                        - {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
    }, [selected, item]);

    return (
        <div className={css['item-hover']}>
            <div className={css['item-hover-background']}></div>
            <div className={`${css['item-hover-title']} ${css['date']}`}>{date}</div>
            <div className={css['item-hover-title']}>{`◈ ${item.title} ◈`}</div>
            <div className={css['item-hover-links']}>{links}</div>
            <div className={css['item-hover-content']}>{renderContent}</div>
        </div>
    );
}
