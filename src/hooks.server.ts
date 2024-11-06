import { Handle } from "@sveltejs/kit"

// include these if using database
// import { prisma } from "$lib/db"
// prisma.$connect()

// function for adding middleware to all calls
export const handle: Handle = async ({ resolve, event }) => {
  return resolve(event)
}
