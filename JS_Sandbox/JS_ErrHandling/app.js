const user = {email: 'jdoe@gmail.com'};

try {
  // produce a reference error
  // myFunction();

  // produce a type error
  // null.myFunction();

  // produce a syntax err
  // eval('Hello world');

  // URI error
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(err) {
  // console.log(`${err.name}: null err`);
  console.log(err);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues...');