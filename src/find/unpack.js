import { unpack } from 'efrt'
import dstPatterns from './dst-patterns.js'
import pcked from './_data.js'
import misc from './misc.js'

// unpack our lexicon of words
let zones = {}
let lexicon = Object.assign({}, misc)
Object.keys(pcked).forEach(top => {
  Object.keys(pcked[top]).forEach(name => {
    let a = pcked[top][name]
    let id = `${top}/${name}`
    zones[id] = {
    }
    Object.keys(unpack(a[0])).forEach(k => {
      lexicon[k] = lexicon[k] || []
      lexicon[k].push(id)
    })
    if (a[3]) {
      zones[id].dst = dstPatterns[a[1]].split(/\|/)
    }
  })
})

export { zones, lexicon }