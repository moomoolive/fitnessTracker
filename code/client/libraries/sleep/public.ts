// creates value that can be awaited for X milliseconds
export async function sleep(milliseconds: number): Promise<boolean> {
    return new Promise(resolve => {
        return window.setTimeout(() => resolve(true), milliseconds)
    })
}

// an abstraction above the sleep function -> seconds instead of milliseconds
export function sleepSeconds(seconds: number): Promise<boolean> {
    const millisecondsInOneSecond = 1_000
    return sleep(seconds * millisecondsInOneSecond)
}