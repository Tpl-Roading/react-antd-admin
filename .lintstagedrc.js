const fs = require("fs")
const declarationFileRoot = './types'
let declarationFiles = []

try {
  declarationFiles = fs.readdirSync(declarationFileRoot).filter(item => item.endsWith('.d.ts')).map(p => declarationFileRoot + '/' + p)
} catch(e) {
  declarationFiles = []
}

module.exports = {
  '**/*.{ts,tsx}': [
    (filenames) => {
      const files = [...filenames, ...declarationFiles];
      return `tsc-files ${files.join(' ')} --noEmit --skipLibCheck`;
    },
    "eslint --cache --fix",
  ],
  '**/*.{js,jsx}': [
    "eslint --cache --fix",
  ],
  "**/*.vue": [
    "eslint --cache --fix",
  ],
  "**/*.{css,less}": [
    "stylelint --cache --fix",
  ]
}
