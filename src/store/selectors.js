export function getCurrentUserShelves(state) {
  return state.shelves.shelves;
}

export function getCurrentUserReviews(state) {
  return state.reviews.userReviews;
}

export function getCurrentUserReviewByUserBook(state, userBook) {
  return state.reviews.userReviews.find(review => review.book.data.id === userBook.book.data.id)
}

export function getCurrentUser(state) {
  return state.users.currentUser;
}

export function getBooksSelector(state) {
  return state.books.books;
}

export function getUserBooksSelector(state) {
  return state.userBooks.books;
}

export function getBooksReviewsSelector(state) {
  return state.reviews.bookReviews;
}

export function hasBookSelector(state, bookId) {
  return !!state.userBooks.books.find(userBook => userBook.book.data.id === bookId);
}

export function getBookById(state, bookId) {
  return state.books.book;
}