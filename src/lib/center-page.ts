import { writable } from 'svelte/store'

export const centerPage = writable(
    'training' as 'training' | 'strats' | 'tips' | 'theorycrafting'
)
