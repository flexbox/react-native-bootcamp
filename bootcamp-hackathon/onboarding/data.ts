interface VinylsProps {
  title: string
  artist: string
  image_url: string
  id: number
  date: string
}

export const allVinyls: VinylsProps[] = [
  {
    title: "From Mars to Sirius",
    artist: "Gojira",
    image_url: "https://m.media-amazon.com/images/I/91+7DKyZFmL._SS500_PIPJStripe-Robin-Large-V2,TopLeft,0,0_.jpg",
    id: 3245346,
    date: "Wed Feb 24 2021 09:56:19 GMT+0100 (Central European Standard Time)",
  },
  {
    title: "Dark side of the Moon",
    artist: 'Pink Floyd',
    image_url: "https://m.media-amazon.com/images/I/61Vs6BCeDHL._SS500_PIPJStripe-Robin-Large-V2,TopLeft,0,0_.jpg",
    id: 3245346,
    date: "Wed Feb 24 2021 09:56:19 GMT+0100 (Central European Standard Time)",
  },
  {
    title: "Les Sardines",
    artist: 'Patrick Sebastien',
    image_url:"https://m.media-amazon.com/images/I/81iGNNceqnL._SS500_.jpg",
    id: 3245346,
    date: "Wed Feb 24 2021 09:56:19 GMT+0100 (Central European Standard Time)",
  }
]
