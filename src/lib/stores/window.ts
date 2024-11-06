import { writable, derived } from "svelte/store"
import type { Readable } from "svelte/store"

// Initialize the store with the current window width
export const screenWidth = writable<number>(0)
export const screenHeight = writable<number>(0)
export const loaded = derived(screenHeight, height => {
  return height > 0
})
export const mobile: Readable<boolean> = derived(screenWidth, width => {
  return width < 900
})
