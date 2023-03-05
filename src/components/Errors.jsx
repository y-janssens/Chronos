import { Error404, Broken, Reload } from './Icons';
import '../styles/errors.css';

export default function Error({ error }) {
    return (
        <div className="error-container">
            <Error404 />
            <div className="error-background">
                <Broken />
            </div>
            <span>Une erreur est survenue</span>
            <div>{error}</div>
            <div className="error-buttons-container">
                <button className="button-content" onClick={() => window.location.reload()}>
                    <Reload /> <span>Recharger</span>
                </button>
            </div>
        </div>
    );
}
