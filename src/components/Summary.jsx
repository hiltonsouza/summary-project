import { Rectangle } from "./Rectangle";

import iconMemory from '../assets/icon-memory.svg'
import iconReaction from '../assets/icon-reaction.svg'
import iconVerbal from '../assets/icon-verbal.svg'
import iconVisual from '../assets/icon-visual.svg'

import './Summary.css'

export function Summary() {
    return (
        <section className="summary">
            <h2>Summary</h2>

            <Rectangle icon={iconReaction} type={"Reaction"} number={80} color="red" />
            <Rectangle icon={iconMemory} type={"Memory"} number={92} color="yellow" />
            <Rectangle type={"Verbal"} number={61} icon={iconVerbal} color="green" />
            <Rectangle type={"Visual"} number={73} icon={iconVisual} color="blue" />

            <button>Continue</button>
        </section>
    )
}