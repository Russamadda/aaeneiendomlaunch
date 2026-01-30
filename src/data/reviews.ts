export type Review = {
  title: string;
  text: string;
  name: string;
  date?: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    title: "Fikse diverse påbegynt opppussing av liten leilighet.",
    text: "Veldig fornøyd. De gjorde alt jeg behøvde på veldig kort tid.",
    name: "Maria Halvorsen",
    date: "Tirsdag 24. September 2024",
    rating: 5.0,
  },
  {
    title: "Skifte bordkledning",
    text: "Veldig fornøyd med arbeidet og kommunikasjonen.",
    name: "Guro Fagerbakke",
    date: "Mandag 19. August 2024",
    rating: 5.0,
  },
];
