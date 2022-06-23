import {CreateBooks} from './handler.js';
export const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: function (req, res) {
        return CreateBooks(req, res)
      }
    },
  ];
