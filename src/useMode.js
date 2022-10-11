export function useMode(light, dark, mode) {
    if (mode === 'light') {
        return light
    } else {
        return dark
    }
}