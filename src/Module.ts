// export interface IGameData {
// 	gameSections: (
// 		| {
// 				sectionNumber: number
// 				active: string
// 		  }
// 		| {
// 				sectionNumber: number
// 				active: null
// 		  }
// 	)[]
// }
export interface IGameSectionProps {
	activeItem: string | null
	functionClick: (index: number) => void
	index: number
}
// export interface IActiveInMoment {
// 	activeInMoment: {
// 		value: string
// 		active: boolean
// 	}[]
// }

export interface IGameSection {
	sectionNumber: number
	active: null | string
}
