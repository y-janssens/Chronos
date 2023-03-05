import '../styles/loader.css';

export default function Loader({ loading = false, children = null, height = '100%' }) {
    if (!loading) {
        return children;
    }
    return (
        <div className="loadingSpinnerContainer" style={{ height: height }}>
            <div className="loading spinner"></div>
            <div className="loading background"></div>
            <span>Chargement...</span>
        </div>
    );
}
