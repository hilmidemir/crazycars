import { Cars } from './app/shared/models/Cars';
import { Tag } from './app/shared/Tag';

export const sample_cars: Cars[] = [
  {
    id:'1',
    name: 'Nissan GTR R-34',
    madeYear: '1998-2002',
    price: 250_000,
    favorite: true,
    origins: ['Japan'],
    imageUrl: 'assets/r34.jpg',
    tags: ['Godzilla', 'Japan', 'Coupe'],
  },
  {
    id:'2',
    name: 'Toyota Supra MK4',
    price: 260_000,
    madeYear: '1998-2002',
    favorite: true,
    origins: ['Japan'],
    imageUrl: 'assets/supra_mk4.jpg',
    tags: ['Supra', 'Japan', 'Coupe'],
  },
  {
    id:'3',
    name: 'BMW M3 E46',
    price: 100_000,
    madeYear: '2000-2006',
    favorite: true,
    origins: ['Germany'],
    imageUrl: 'assets/m3_e46.jpg',
    tags: ['German', 'Coupe'],
  },
  {
    id:'4',
    name: 'BMW M5 CS',
    price: 146_000,
    madeYear: '2021',
    favorite: true,
    origins: ['Germany'],
    imageUrl: 'assets/m5_cs.jpg',
    tags: ['Monster', 'German', 'Sedan'],
  },
  {
    id:'5',
    name: 'Mercedes AMG GTR',
    price: 165_000,
    madeYear: '2017-2021',
    favorite: true,
    origins: ['Germany'],
    imageUrl: 'assets/amg_gtr.jpg',
    tags: ['German', 'Coupe', 'Sedan'],
  },
  {
    id:'6',
    name: 'Audi RS7',
    price: 120_000,
    madeYear: '2021- ',
    favorite: false,
    origins: ['Germany'],
    imageUrl: 'assets/rs7.jpg',
    tags: ['German'],
  }
]

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Japan', count: 2 },
  { name: 'German', count: 4 },
  { name: 'Supra', count: 1 },
  { name: 'Monster', count: 1 },
  { name: 'Godzilla', count: 1 },
  { name: 'Sedan', count: 2 },
  { name: 'Coupe', count: 4 }
]
