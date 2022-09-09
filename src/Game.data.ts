import { IGameSection } from './Module'

export const gameSections: IGameSection[] = [...new Array(9)].map((_, index) => ({
	active: null,
	sectionNumber: index + 1,
}))
