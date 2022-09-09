import { useEffect, useState } from 'react';
import { gameSections } from '../Game.data';
import './Game.css'
import GameSection from './GameSection/GameSection';

// All wins
const gameWins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

// function for check win
const checkWin = (win: number[], arr: number[]) => {
    let winStepsCount: number = 0;
    win.forEach(winEl => {
        arr.forEach(arrEl => {
            if (winEl === arrEl) {
                winStepsCount += 1
            }
        })
    })
    return winStepsCount
}



const Game = () => {

    // All sections
    const [gameSectionsAfter, setGameSectionsAfter] = useState([...gameSections])


    // Steps user
    const [stepsX, setStepsX] = useState<number[]>([])
    const [stepsO, setStepsO] = useState<number[]>([])

    // Function for start New Game
    const goNewGame = (): void => {
        setGameSectionsAfter(gameSections)
        setStepsX([])
        setStepsO([])
    }


    // Active in the moment
    const [activeInMoment, setActiveInMoment] = useState([
        { value: 'X', active: false },
        { value: 'O', active: true }
    ])

    // Change active in the moment
    const changeActiveInMoment = (): void => {
        setActiveInMoment((prev) => prev.map(({ active, value }) => ({ active: !active, value })))
    }


    const setStepValue = (activeValue: string, index: number): void => {
        if (activeValue === 'X') {
            setStepsX([...stepsX, gameSectionsAfter[index].sectionNumber])
        } else {
            setStepsO([...stepsO, gameSectionsAfter[index].sectionNumber])
        }
    }

    // Add active item in sections and in steps
    const changeActive = (index: number) => {
        const activeValue = activeInMoment.find(({ active }) => active === true)!.value;
        if (gameSectionsAfter[index].active === null) {
            setGameSectionsAfter(prev => prev.map(({ active, sectionNumber }, i) => (
                {
                    active: i === index ? activeValue : active,
                    sectionNumber
                }))
            )
            changeActiveInMoment()
            setStepValue(activeValue, index)

        } else {
            alert('Section is busy')
        }
    }

    // To start Game
    useEffect(() => {
        gameWins.forEach(win => {
            if (checkWin(win, stepsX) === 3) {
                alert('win X')
                goNewGame()
            } else if (checkWin(win, stepsO) === 3) {
                alert('win O')
                goNewGame()
            }
        })
    }, [stepsO, stepsX])


    return (
        <div className="Game">
            {gameSectionsAfter.map((gameSectionNumber, index) => (
                <GameSection index={index} activeItem={gameSectionNumber.active} functionClick={changeActive} key={Math.random()} />
            ))}
        </div>
    )
}

export default Game;