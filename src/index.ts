export class Log {
    static success(message: string) {
        console.log(`%c${message}`, 'color: green');
    }

    static danger(message: string) {
        console.log(`%c${message}`, 'color: red');
    }

    static info(message: string) {
        console.log(`%c${message}`, 'color: black; background-color: yellow');
    }
}