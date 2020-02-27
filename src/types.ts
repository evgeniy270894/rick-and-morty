export interface ICharacter {
  id: string,
  name: string,
  image: string
}

export interface ICharacters {
  characters: {
    results: ICharacter[] | null
  }
}
