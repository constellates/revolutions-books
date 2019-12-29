const ghpages = require('gh-pages');

ghpages.publish('public', {
  user: {
    name: 'Zack',
    email: 'mail@constellates.com'
  },
  repo: 'https://' + process.env.GH_TOKEN + '@github.com:constellates/revolutions-books.git',
  silent: true
}, (a, b) => {
  console.log('a');
  console.log(a);
  console.log('b');
  console.log(b);
});