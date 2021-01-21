import { Injectable } from '@nestjs/common';
import GAMES_DATA from './games-data'
import Game from './Game'
import fs from 'fs'
import { exception } from 'console';
import CreateGameDto from './CreateGameDto';

@Injectable()
export class Try2GamesService {
  private readonly games: Game[] = []
  constructor(){
    GAMES_DATA.forEach((itemData) => {
      let game : Game = new Game()
      game.slug = itemData.slug
      game.name = itemData.name
      game.released = itemData.released
      game.rating = itemData.rating
      game.metacritic = itemData.metacritic

      this.games.push(game)
    })
  }

  getGames() : Promise<Game[]> {
    return new Promise((resolve, reject) => {
      resolve(this.games)
    })
  }

  getGame(gameSlug: string) : Promise<Game | undefined> {
    return new Promise((resolve, reject) => {
      let game: Game | undefined = this.games.find((game: Game) => game.slug == gameSlug)
      resolve(game)
    })
  }

  addGame(game: CreateGameDto) : Promise<Game> {
    return new Promise((resolve, reject) => {
      this.games.push(Game.createInstance(game))
      resolve(this.games[this.games.length - 1])
    })
  }

  deleteGame(gameSlug: string) : Promise<Object> {
    return new Promise((resolve, reject) => {
      let gameIndex: number = this.games.findIndex((game: Game) => game.slug == gameSlug)
      if(gameIndex < 0) resolve({status: false})
      else {
        this.games.splice(gameIndex, 1)
        resolve({status: true})
      }
    })
  }
}
