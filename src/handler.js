import { nanoid } from 'nanoid';
import {dataBooks} from './index.js';

export const CreateBooks = (request, h) => {
    const {name, year, author, summary, publisher,pageCount,readPage,reading,finished} = request.payload;

      const id = nanoid(16);
  const insertedAt = new Date().toISOString;
  const updatedAt = insertedAt;
  const newBooks = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };
  dataBooks.push(newBooks);

  let response
  try {
    const isSuccess = dataBooks.filter((books) => books.id === id).length > 0;
  if (isSuccess) {
    response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: dataBooks 
    });
    response.code(201);
  }

  if (!name) {
    response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
    });
    response.code(400);
  }

  if (readPage > pageCount)
    response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    });
    response.code(400);

  return response;
  } catch(error) {
    const response = h.response({
      status: "error",
      message: "Buku gagal ditambahkan"
    });
    response.code(500);
    return response
  }
  
};
