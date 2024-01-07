export const useHello = () => {
    const sayHello = async () => {
        await console.log("Composable function triggered")
    }
    return {
        sayHello
    }
}