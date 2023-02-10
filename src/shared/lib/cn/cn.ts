
type Mods = Record<string, string | boolean>

export const cn = (cls: string, additional: string[] = [], mods: Mods = {}): string => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.keys(mods).filter(key => mods[key] === true)
	].join(' ')
}