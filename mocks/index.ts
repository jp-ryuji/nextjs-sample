async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    console.log(`initMocks on server`)
    server.listen()
  } else {
    const { worker } = await import('./browser')
    console.log(`initMocks on browser`)
    worker.start()
  }
}

initMocks()

export {}
