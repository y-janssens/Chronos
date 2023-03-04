import { useForm, useFetch } from '../hooks';
import Home from './Home';

function Context() {
    const [form, setForm, setFormObject] = useForm({
        events: [],
        selectedYear: 1164,
        availableYears: [],
        selectedItem: [],
        colors: ['#796244', '#705b40', '#68553c', '#604f38', '#584934', '#4f4230', '#473b2c', '#403529', '#382e25', '#302821', '#28211d'],
        selectedColor: '#706E45'
    });

    const [, loadingEvents, errors] = useFetch({
        onSuccess: (_data) => {
            const years = [...new Set(_data.map((q) => q.year))].slice(1);
            setFormObject({ ...form, events: _data, availableYears: years, selectedYear: years[0] });
        }
    });
    return <Home form={form} setForm={setForm} setFormObject={setFormObject} loading={loadingEvents} errors={errors} />;
}

export default Context;
