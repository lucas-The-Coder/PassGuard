# PassGuard

Password Strength + Hashing CLI in Node.js

PassGuard checks password strength, gives clear feedback, and hashes the password with SHA-256. Helpers return data, only main prints. Built for learning backend security basics: const vs let, functions, if else, regex, crypto, return vs console.log.

## Features
- Scores password from 0 to 5
- Labels WEAK, MEDIUM, STRONG
- Feedback for length, lowercase, uppercase, number, symbol
- SHA-256 hash in hex
- Guard for non string input
- No printing inside helpers

## How it works
- checkStrength(password) returns an object with score, label, feedback
- hashPassword(password) returns a hex SHA-256 string
- main() reads process.argv, calls the helpers, prints the result

## Usage

node pass_guard.js <password>

## Examples

node pass_guard.js
Usage: node pass_guard.js <password>

node pass_guard.js password123
[MEDIUM] Score: 3/5
- Add uppercase
- Add symbol
SHA-256: ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f

node pass_guard.js P@ssw0rd123
[STRONG] Score: 5/5
SHA-256: 231ecc7d178da5f22983bc579599396d6c139a457987ae1ee0026d88432d6a72

## Project structure

pass_guard.js, main CLI file
package.json, project metadata and scripts
.gitignore, ignored files
README.md, this file

## Security note
SHA-256 is for learning and integrity checks, not for storing passwords in production. In production, use bcrypt or Argon2 with salt. This tool never saves passwords, it only checks and hashes in memory.

## Author
Luke Dennis, Midrand, South Africa
GitHub: https://github.com/lucas-The-Coder
LinkedIn: https://www.linkedin.com/in/luke-dennis-2730743b2
