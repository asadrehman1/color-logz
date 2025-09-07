# color-logz 🎨
A tiny library to add colorful logs in the console. Make your debugging and development more fun and readable with styled console.log.

## Installation
npm install color-logz  
or with yarn: yarn add color-logz

## Usage
import { Log } from "color-logz";  
Log.success("✅ This is a success message!");  
Log.danger("❌ This is an error message!");  
Log.info("ℹ️ This is an info message!");

## Output
- Success → Green text  
- Danger → Red text  
- Info → Black text with yellow background  

## API
- Log.success(message: string) → Logs a success message in green.  
- Log.danger(message: string) → Logs a danger/error message in red.  
- Log.info(message: string) → Logs an info/warning message in yellow background with black text.  

## Author
Asad Rehman — [GitHub](https://github.com/asadrehman1)  

## License
MIT © 2025 Asad Rehman
