const airtableBase = require('airtable').base('appdPGLh274RumwXS');

export async function createRecord(data) {
  const record = await airtableBase('Test Results').create(data)
  return record
}

export async function createInitalRecord() {
  const record = await createRecord({
    "Start time": new Date().toISOString()
  })
  return record.getId()
}
