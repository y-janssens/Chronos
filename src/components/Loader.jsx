import '../styles/loader.css';

function Loader({ loading = false, children = null, height = '100%' }) {
    if (loading) {
        return (
            <div className="loadingSpinnerContainer" style={{ height: height }}>
                <div className="loading spinner"></div>
                <div className="loading background"></div>
                <span>Chargement...</span>
            </div>
        );
    }
    return children;
}

export default Loader;
