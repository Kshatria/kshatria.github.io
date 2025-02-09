export type SwitcherProps = {
	items: SwitcherItem[],
	defaultValue: string,
	name: string,
	onChange: (value: string) => void
}

export type SwitcherItem = {
	name: string,
	icon?: string,
	text: string
}
