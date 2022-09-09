import { FC } from 'react'
import { IGameSectionProps } from '../../Module'
import './GameSection.css'

const GameSection: FC<IGameSectionProps> = ({ activeItem, functionClick, index }) => {
    return (
        <div
            className="GameSection"
            style={{ color: `var(--game${activeItem})` }}
            onClick={() => functionClick(index)}
        >
            {activeItem}
        </div>
    )
}
export default GameSection