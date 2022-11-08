export default {
  async fetch(request, env) {
    return new Response('Not found', { status: 404 })
  }
}

export class Room {
  constructor(controller, env) {}

  async fetch(request) {
    return new Response('Not found', { status: 404 })
  }
}
