import CreateGameDto from "./CreateGameDto"

class Game {
  slug: string
  name: string
  released: string
  rating: number | null
  metacritic: number | null

  static createInstance(createGameDto: CreateGameDto) : Game {
    const game = new Game()
    console.log(createGameDto.slug)
    game.slug = createGameDto.slug
    game.name = createGameDto.name
    game.released = createGameDto.released
    game.rating = createGameDto.rating
    game.metacritic = createGameDto.metacritic
    return game
  }
}

export default Game