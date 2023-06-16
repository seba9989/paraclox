import * as Type from './type'

interface CurrentAndMax {
	current: number
	max: number
}

//Enemy
export interface Enemy {
	id: number
	name: string
	attacks: [] | never[]
	hp: CurrentAndMax
}
export interface EnemysStore {
	enemys: Enemy[]
	dispatch: (enemy: number, action: Type.changeStatsAction, value: number) => void
	setEnemy: (enemysNames: string[]) => void
}

//Player
interface Attack {
	name: string
	effect: string
	dmg: number
	energy: number
	type: Type.damageType
	activate?: () => void
}

export interface Player {
	name: string
	hp: CurrentAndMax
	energy: CurrentAndMax
	weapons: {
		name: string
		attacks: Attack[]
	}[]
	// inventory: {
	// 	name: string
	// }[]
}
export interface PlayerStore {
	player: Player
	dispatch: (action: Type.changeStatsAction, value: number) => void
	setPlayer: (characterName: string) => void
}

// //Multy use interface
// export interface Attack {
// 	name: string;
// 	damage: number;
// 	// type: attackType;
// 	// cost: {
// 	// 	type: costType;
// 	// 	volume: number;
// 	// };
// }

// export interface Item {
// 	name: string;
// 	// type: string;
// 	// stacked: boolean;
// 	// quantity?: number;
// }

// export interface Effect {
// 	name: string;
// }

// //All player interface
// export interface Stats {
// 	hp: {
// 		current: number;
// 		max: number;
// 		percent: string;
// 		change: (newHp: number) => void;
// 	};
// 	energy: {
// 		current: number;
// 		max: number;
// 		percent: string;
// 		change: (newEnergy: number) => void;
// 	};
// 	//defensive: number;
// 	//crit: number;
// }

// export interface Player {
// 	name: string;
// 	attacks: Attack[];
// 	stats: Stats;
// 	inventory: Item[] | {}[];
// 	effects?: Effect[];
// }

// //All opponent interface
// export interface OpponentInterface {
// 	name: string;
// 	hp: number;
// 	attacks: Attack[];
// }
