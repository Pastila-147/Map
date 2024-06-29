// TODO: write your code here
export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Герой не найден');
    this.errors.set(2, 'Неверное количество букв');
    this.errors.set(3, 'Неверный тип героя');
  }

  translate(code) {
    if (this.errors.has(code)) {
      const result = this.errors.get(code);
      return result;
    }
    return 'Unknown error';
  }
}
