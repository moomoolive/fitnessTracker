export async function sleep(milliseconds: number): Promise<boolean> {
    return new Promise(resolve => {
        return window.setTimeout(() => resolve(true), milliseconds)
    })
}