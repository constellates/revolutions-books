const ghpages = require('gh-pages');

const GH_TOKEN = process.argv[2];

ghpages.publish('public', {
  repo: 'https://' + GH_TOKEN + '@github.com/constellates/revolutions-books.git',
  silent: false
}, (error, b) => {
  // if (error) {
    console.log(error);
    console.log(b);
  // }
});