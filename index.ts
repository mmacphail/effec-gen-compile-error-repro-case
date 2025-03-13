import { Effect } from "effect"

const generateRandomNumber = () => Math.floor(Math.random() * 100)
const generateRandomNumberEf = Effect.sync(generateRandomNumber)


const program: Effect.Effect<number, never, never> = Effect.gen(function* () {
  const number = yield* generateRandomNumberEf
  return number
})