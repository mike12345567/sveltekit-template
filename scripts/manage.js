#!/usr/bin/env node
import compose from "docker-compose"
import path from "path"
import dotenv from "dotenv"
import updateDotEnv from "update-dotenv"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const existingConfig = dotenv.config().parsed
// This script wraps docker-compose allowing you to manage your dev infrastructure with simple commands.
const CONFIG = {
  cwd: path.join(__dirname, ".."),
  config: path.join(__dirname, "..", "postgres", "docker-compose.yaml"),
  log: true,
}

const Commands = {
  Up: "up",
  Down: "down",
  Nuke: "nuke",
}

async function init() {
  const envVars = {}

  const config = { ...envVars, ...existingConfig }

  await updateDotEnv(config)
}

async function up() {
  console.log("Spinning up your dev environment... 🔧✨")
  await init()
  await compose.upAll(CONFIG)
}

async function down() {
  console.log("Spinning down your dev environment... 🌇")
  await compose.stop(CONFIG)
}

async function nuke() {
  console.log(
    "Clearing down your dev environment, including all containers and volumes... 💥"
  )
  await compose.down({
    ...CONFIG,
    // stop containers, delete volumes
    commandOptions: ["-v", "--remove-orphans"],
  })
}

const managementCommand = process.argv.slice(2)[0]

if (
  !managementCommand ||
  !Object.values(Commands).some(command => managementCommand === command)
) {
  throw new Error(
    "You must supply either an 'up', 'down' or 'nuke' commmand to manage the development environment."
  )
}

let command
switch (managementCommand) {
  case Commands.Up:
    command = up
    break
  case Commands.Down:
    command = down
    break
  case Commands.Nuke:
    command = nuke
    break
  default:
    command = up
}

command()
  .then(() => {
    console.log("Done! 🎉")
  })
  .catch(err => {
    console.error(
      "Something went wrong while managing dev environment:",
      err.message
    )
  })
