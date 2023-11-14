import { heroes } from "../data/data"

export const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id)
}
