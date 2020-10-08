let arc = require('@architect/functions')

async function route(request) {
  console.log(request)
  return {
    session: {},
    location: '/'
  }
}

exports.handler = arc.http.async(route)