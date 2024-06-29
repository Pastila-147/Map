import ErrorRepository from '../app';

let bug;
beforeEach(() => {
  bug = new ErrorRepository();
});

test('Проверка имени героя', () => {
  expect(bug.translate(1)).toBe('Герой не найден');
});

test('Проверка количества букв в имени', () => {
  expect(bug.translate(2)).toBe('Неверное количество букв');
});

test('Проверка типа героя', () => {
  expect(bug.translate(3)).toBe('Неверный тип героя');
});

test('Проверка Unknown error', () => {
  expect(bug.translate(4)).toBe('Unknown error');
});