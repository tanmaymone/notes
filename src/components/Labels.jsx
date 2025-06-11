import './Labels.css';

export default function Labels({ labels }) {
    return (
        <div className="labels">
            {labels.map((label, index) => (
                <button key={index} className="label-btn" >
                    {label}
                </button>
            ))}
        </div>
    );
}