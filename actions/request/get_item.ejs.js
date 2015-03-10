<%- Lucy.code.request({
  protocol: 'https',
  method: 'get',
  domain: 'hacker-news.firebaseio.com',
  path: {join: ['v0/item/', {answer: 'itemID'}, '.json']},
  returns: 'json'
}) %>
