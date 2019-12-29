const ghpages = require('gh-pages');

const GH_TOKEN = process.argv[2];

ghpages.publish('public', {
  user: {
    name: 'Zack',
    email: 'mail@constellates.com'
  },
  repo: 'https://' + GH_TOKEN + '@github.com/constellates/revolutions-books.git',
  silent: false
}, (error) => {
  if (error) {
    console.log(error);
  }
});