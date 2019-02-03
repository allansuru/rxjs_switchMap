import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const bookDetails = [
      { id: 1, name: 'Angular PRO', category: 'Angular' },
      { id: 2, name: 'C# PRO', category: 'C#' },
      { id: 3, name: 'Web Assembly', category: 'WEB' }
    ];
    return { books: bookDetails };
  }
}
