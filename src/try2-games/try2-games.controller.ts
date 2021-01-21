import { Controller, Get, HttpException, Param, Post, Body, Delete, Query } from '@nestjs/common';
import CreateGameDto from './CreateGameDto';
import Game from './Game';
import { Try2GamesService } from './try2-games.service'

@Controller('try2-games')
export class Try2GamesController {
  constructor(private readonly appService: Try2GamesService) {}

  @Get()
  async getGames() : Promise<Game[]> {
    const games: Game[]  = await this.appService.getGames()
    return games
  }

  @Get(':gameSlug')
  async getGame(@Param('gameSlug') gameSlug: string) : Promise<Game> {
    const game: Game | undefined = await this.appService.getGame(gameSlug)
    if(game == undefined) throw new HttpException("Game not found!", 404)
    return game
  }

  @Post()
  async addGame(@Body() createGameDto: CreateGameDto) : Promise<Game> {
    const game = this.appService.addGame(createGameDto)
    return game
  }

  @Delete()
  async deleteGame(@Query() query) : Promise<Object> {
    const res : Object = await this.appService.deleteGame(query.gameSlug)
    return res 
  }
}
