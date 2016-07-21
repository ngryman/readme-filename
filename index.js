'use strict'

const fs = require('fs')

module.exports = function readmeFilename(dir) {
  return new Promise((resolve, reject) => {
    dir = dir || '.'

    fs.readdir(dir, (err, files) => {
      if (err) return reject(err)

      const filename = files.find(file => /^readme/i.test(file)) || null
      resolve(filename)
    })
  })
}
