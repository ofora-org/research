const airtableBase = require('airtable').base('appdPGLh274RumwXS');

async function createRecord(data) {
  const record = await airtableBase('Test Results').create(data)
  return record
}

async function updateRecord(id, data) {
  try {
    const record = await airtableBase('Test Results').update(id, objArraysToString(data))
    return record
  } catch(e) {
    console.log(e)
  }
}

async function createInitalRecord() {
  const record = await createRecord({
    "Start time": new Date().toISOString()
  })
  return record.getId()
}

function objArraysToString(obj) {
  newObj = {...obj}
  for (var key in newObj) {
    newObj[key] = Array.isArray(newObj[key]) || newObj[key] instanceof Object ?
      JSON.stringify(newObj[key]) : newObj[key]
  }
  return newObj
}

module.exports = {
  createInitalRecord,
  createRecord,
  updateRecord
}
