import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InmemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    let gifts = [
      {
        description: '1 koffiemok',
        category: 'functioneel',
        thumbnail: 'assets/koffie.png',
        points: '120',
        stock: 6,
        id: 1
      },
      {
        description: '1 cinematicket',
        category: 'ontspanning',
        thumbnail: 'assets/cinema.png',
        points: '250',
        stock: 4,
        id: 2
      },
      {
        description: 'Twix',
        category: 'eten en drinken',
        thumbnail: 'assets/twix.png',
        points: '30',
        stock: 16,
        id: 3
      },
      {
        description: 'Bounty',
        category: 'eten en drinken',
        thumbnail: 'assets/bounty.png',
        points: '30',
        stock: 16,
        id: 4
      },
      {
        description: 'popcorn',
        category: 'eten en drinken',
        thumbnail: 'assets/popcorn.png',
        points: '60',
        stock: 0,
        id: 5
      },
      { description: 't-shirt', category: 'kledij', thumbnail: 'assets/tshirt.png', points: '200', stock: 2, id: 6 }
    ];

    let categories = [
      { name: 'functioneel', id: 1 },
      { name: 'ontspanning', id: 2 },
      { name: 'eten en drinken', id: 3 },
      { name: 'kledij', id: 4 }
    ];

    return { gifts, categories };
  }
}

/*
 GET /api/gifts                  // alle gift objecten
 GET /api/gifts?description=j    // gifts waarbij description 'j' bevat
 GET /api/gifts/1                // gift met als id=1
 POST /api/gifts                 // gift object toevoegen
 PUT /api/gifts                  // gift object updaten
 DELETE /api/gifts/1             // delete gift met als id=1
 GET /api/categories             // alle category objecten
 */
