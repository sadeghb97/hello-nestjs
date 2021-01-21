import { IsNotEmpty } from 'class-validator';

class CreateGameDto {
  @IsNotEmpty()
  readonly slug: string
  
  readonly name: string
  readonly released: string
  readonly rating: number | null
  readonly metacritic: number | null
}

export default CreateGameDto