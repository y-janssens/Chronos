import YearSelector from '../components/YearSelector';
import SelectedYear from '../components/SelectedYear';
import Loader from '../components/Loader';
import css from '../styles/styles.module.css';

const Home = ({ form, setForm, setFormObject, loading, errors }) => {
    return (
        <div className={css['timeline-container']}>
            <div className={css['timeline-header']}>Chronologie Générale</div>
            <Loader loading={loading}>
                <YearSelector form={form} setForm={setFormObject} />
                <SelectedYear form={form} setForm={setForm} />
            </Loader>
        </div>
    );
};
export default Home;
