const fs = require('fs')

const fileReplacements = []

fs.readdirSync('ui', {
  recursive: true
})
.filter((entry) => entry.endsWith('.css') || entry.endsWith('.js'))
.forEach((cssFile) => {
  const timestamp = Date.now()
  const splitName = cssFile.split('.')
  const newFile = `${splitName[0]}.${timestamp}.${splitName[1]}`

  fileReplacements.push({
    oldName: cssFile,
    newName: newFile
  })

  fs.renameSync(`ui/${cssFile}`, `ui/${newFile}`)
})
