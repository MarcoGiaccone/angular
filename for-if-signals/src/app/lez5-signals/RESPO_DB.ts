export interface Responsabile {
  id: string,
  nome: string,
  cognome: string,
  corsi: string[],
  image: string
}

export const RESPO_DB: Responsabile[] = [
    {
      id: "r1",
      nome: 'Fabio',
      cognome: 'Fabi',
      corsi: ['Web', 'Design', 'Turismo'],
      image: "fabio.jpg"
    },
    {
      id: 'r2',
      nome: 'Mario',
      cognome: 'Rossi',
      corsi: ['Database', 'ASD', 'Panetterie'],
      image: "mario.jpg"
    },
    {
      id: 'r3',
      nome: 'Luca',
      cognome: 'Verdi',
      corsi: ['SEO & Marketing'],
      image: "luca.jpg"
    }
  ]