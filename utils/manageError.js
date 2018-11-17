module.exports = function manageError(type, messages) {
  console.log('');
  console.log('Error');
  messages.map((el) => {
    return console.log(el);
  });
  console.log('');
  if (type === 'fatal') {
    process.exit(1);
  }
} 