import EventItem from './EventItem';
import css from '../../styles/styles.module.css';

export default function SelectedYear({ form, setForm }) {
    return (
        <div className={css['years-container']}>
            <div className={css['year-items-container']}>
                {form.yearEvents.map((item, index) => {
                    return <EventItem key={item.id} form={form} setForm={setForm} year={form.yearEvents} item={item} index={index} />;
                })}
            </div>
        </div>
    );
}
