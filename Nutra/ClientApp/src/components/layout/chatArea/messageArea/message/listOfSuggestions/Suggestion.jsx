export default function Suggestion({ title, description }) {
    return (
        <div className="suggestion">
            <div className="upper">
                <span>{title}</span>
                <span>O</span>
            </div>
            <div className="lower">Learn</div>
        </div>
    )
}
