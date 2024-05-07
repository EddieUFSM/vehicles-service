import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Sobrescrever a função _compile para incluir __dirname
const originalCompile = require('module')._extensions['.js']
require('module')._extensions['.js'] = function(module, filename) {
  const fs = require('fs')
  const content = fs.readFileSync(filename, 'utf8')
  const wrappedContent = `(function (exports, require, module, __filename, __dirname) { ${content} \n})(module.exports, require, module, "${filename}", "${__dirname}");`
  module._compile(wrappedContent, filename)
}

// Exportar __dirname para uso em outros arquivos
global.__dirname = __dirname
