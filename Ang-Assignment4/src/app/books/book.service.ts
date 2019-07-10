import { Injectable } from '@angular/core';
import { Book } from './books.model';

@Injectable()

export class BookService {

  getBooks(): Book[] {
    return [
      { name : 'My experiments with Truth',
        author: 'M.K.Gandhi',
        price:  145
      },
      { name : 'The Merchant of venice',
        author: 'William shakespeare',
        price:  543
      },
      { name : 'A Tale of Two Cities',
        author: 'Charles Dickens',
        price: 64
      },
      { name : 'Origin of species',
        author: 'Charles Darwin',
        price: 283
      },
      { name : 'Time Machine',
        author: 'H.G. Wells',
        price: 12
      },
      { name : 'Mein Kampf',
        author: 'Adolf Hitler',
        price: 384
      },
      { name : 'Invisible Man',
        author: 'H.G. Wells',
        price: 123
      }
    ];
  }

}
