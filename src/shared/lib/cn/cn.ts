
type Mods = Record<string, string | boolean>

export const cn = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
	return [
		cls,
		...Object.keys(mods).filter(key => mods[key] === true),
		...additional
	].join(' ')
}