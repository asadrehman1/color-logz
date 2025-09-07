# color-logz 🎨

A tiny library to add **colorful logs** in the console. Make your debugging and development more fun and readable with styled `console.log`.

---

## Installation

Using **npm**:

```bash
npm install color-logz
```

Or with **yarn**:

```bash
yarn add color-logz
```

---

## Usage

```javascript
import { Log } from "color-logz";

Log.success("✅ This is a success message!");
Log.danger("❌ This is an error message!");
Log.info("ℹ️ This is an info message!");
```

---

## Output

- **Success** → Green text  
- **Danger** → Red text  
- **Info** → Black text with yellow background  

---

## API

| Method | Description |
|--------|-------------|
| `Log.success(message: string)` | Logs a success message in green. |
| `Log.danger(message: string)` | Logs a danger/error message in red. |
| `Log.info(message: string)` | Logs an info/warning message in yellow background with black text. |

---

## Author

Asad Rehman — [GitHub](https://github.com/asadrehman1)  

---

## License

MIT © 2025 Asad Rehman
