import YearSelector from './YearSelector';
import SelectedYear from './SelectedYear';
import Loader from '../../components/Loader';
import Error from '../../components/Errors';
import css from '../../styles/styles.module.css';

export default function Timeline({ form, setForm, setFormObject, loading, errors }) {
    return (
        <div className={css['timeline-container']}>
            <div className={css['timeline-header']}>Chronologie Générale</div>
            <Loader loading={loading}>
                {errors ? (
                    <Error errors={errors} />
                ) : (
                    <>
                        <YearSelector form={form} setForm={setFormObject} />
                        <SelectedYear form={form} setForm={setForm} />
                    </>
                )}
            </Loader>
        </div>
    );
}
