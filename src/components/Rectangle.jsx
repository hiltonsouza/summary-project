import './Rectangle.css'

export function Rectangle({ type, number, icon, color }) {
    return (
        <div className={`${color} rectangle`}>
            <img src={icon} alt="" />
            <span>{type}</span>
            <strong>{number} / 100</strong>
        </div>
    )
}