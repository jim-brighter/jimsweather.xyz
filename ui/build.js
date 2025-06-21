const fs = require('fs')
const path = require('path')

const DIST_DIR = 'dist'
const BUILD_SCRIPT = 'build.js'

const ASSET_EXTENSIONS = new Set(['.ico', '.css', '.js', '.html'])

const INDEX_FILE = 'index.html'
const FAVICON_FILE = 'favicon.ico'
const UNVERSIONED_FILES = new Set([INDEX_FILE, FAVICON_FILE])
const BINARY_FILES = new Set([FAVICON_FILE])

const fileReplacements = []
const timestamp = Date.now()

function isValidFile(filename) {
  const ext = path.extname(filename)
  const isAsset = ASSET_EXTENSIONS.has(ext)
  const isNotBuildScript = path.basename(filename) !== BUILD_SCRIPT
  const isNotNodeModule = !filename.startsWith('node_modules/')
  return isAsset && isNotBuildScript && isNotNodeModule
}

function copyFileWithDir(source, dest) {
  const dir = path.dirname(dest)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.copyFileSync(source, dest)
}

function cleanDist() {
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true })
  }
  fs.mkdirSync(DIST_DIR)
}

function getAllFiles(dir = '.') {
  return fs.readdirSync(dir, { recursive: true })
}

function buildAssets() {
  getAllFiles()
    .filter(isValidFile)
    .forEach((oldFile) => {
      const ext = path.extname(oldFile)
      const base = oldFile.slice(0, -ext.length)
      const isUnversioned = UNVERSIONED_FILES.has(oldFile)
      const newFile = isUnversioned ? oldFile : `${base}.${timestamp}${ext}`

      if (!isUnversioned) {
        fileReplacements.push({
          oldName: path.basename(oldFile),
          newName: path.basename(newFile),
        })
      }

      copyFileWithDir(oldFile, path.join(DIST_DIR, newFile))
    })
}

function updateReferences() {
  getAllFiles(DIST_DIR)
    .filter(isValidFile)
    .forEach((filename) => {
      if (BINARY_FILES.has(filename)) {
        return
      }
      const filePath = path.join(DIST_DIR, filename)
      let contents = fs.readFileSync(filePath, 'utf-8')
      for (const { oldName, newName } of fileReplacements) {
        contents = contents.replaceAll(oldName, newName)
      }
      fs.writeFileSync(filePath, contents, { encoding: 'utf-8', flush: true })
    })
}

function main() {
  console.log(`[INFO] :: ${new Date().toISOString()} :: Starting UI Build`)
  cleanDist()
  buildAssets()
  updateReferences()
  console.log(`[INFO] :: ${new Date().toISOString()} :: UI Built Successfully`)
}

main()
