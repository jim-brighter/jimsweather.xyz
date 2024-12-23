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

fs.readdirSync('ui', {
  recursive: true
})
.forEach((filename) => {
  let contents = fs.readFileSync(filename, {
    encoding: 'utf-8'
  })

  for (let replacement of fileReplacements) {
    contents = contents.replace(replacement.oldName, replacement.newName)
  }

  fs.writeFileSync(filename, contents, {
    encoding: 'utf-8',
    flush: true
  })
})
