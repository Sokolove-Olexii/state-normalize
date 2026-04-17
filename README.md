# react

- Проблема: дублюючі та складні дані
- Рішення: нормалізація стану
- Рефакторинг сторінки авторів та відповідей від бекенду
- Метод `createEntityAdapter`
- Звузка методів `createSlice`, `createAsyncThunk` та `createEntityAdapter`
- Бібліотека `normalizr`

## Довідники

- https://redux-toolkit.js.org/api/createEntityAdapter
- https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalizing-data
- https://redux-toolkit.js.org/usage/usage-guide#using-createentityadapter-with-normalization-libraries

## Нормализація

```js
const books = [
  {
    id: 6,
    imgUrl:
      'https://akniga.org/uploads/media/topic/2020/05/17/16/preview/4ce36fcf26e3be50c3d2_400x.jpg',
    title: 'Хребти божевілля',
    genre: 'мiстика',
    authorId: 3,
    author: {
      id: 3,
      name: 'Говард Лавкрафт',
    },
  },
  {
    id: 11,
    imgUrl:
      'https://akniga.org/uploads/media/topic/2019/03/22/08/preview/62ca29212117b7bdec0c_400x.jpg',
    title: 'Зворотній відлік',
    genre: 'фантастика',
    authorId: 4,
    author: {
      id: 4,
      name: 'Вячеслав Шалигін',
    },
  },
];
```

```js
const state = {
  books: {
    ids: [6, 11],
    entities: {
      6: {
        id: 6,
        imgUrl:
          'https://akniga.org/uploads/media/topic/2020/05/17/16/preview/4ce36fcf26e3be50c3d2_400x.jpg',
        title: 'Хребти божевілля',
        genre: 'містика',
        authorId: 3,
        author: 3,
      },
      11: {
        id: 11,
        imgUrl:
          'https://akniga.org/uploads/media/topic/2019/03/22/08/preview/62ca29212117b7bdec0c_400x.jpg',
        title: 'Зворотній відлік',
        genre: 'фантастика',
        authorId: 4,
        author: 4,
      },
    },
  },
  authors: {
    ids: [3, 4],
    entities: {
      3: {
        id: 3,
        name: 'Говард Лавкрафт',
      },
      4: {
        id: 4,
        name: 'Вячеслав Шалигін',
      },
    },
  },
};
```
