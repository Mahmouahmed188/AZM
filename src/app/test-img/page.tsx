export default function TestImage() {
    return (
        <div style={{ padding: '50px', background: 'black', color: 'white' }}>
            <h1>Image Test</h1>
            <p>Background.png:</p>
            <img src="/Background.png" alt="Background" style={{ width: '300px' }} />
            <p>azm-text-logo.png:</p>
            <img src="/azm-text-logo.png" alt="Logo" style={{ width: '300px' }} />
            <p>Cards/Card 1.png:</p>
            <img src="/cards/Card 1.png" alt="Card" style={{ width: '300px' }} />
        </div>
    );
}
