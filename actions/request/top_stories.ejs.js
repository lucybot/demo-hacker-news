<%- Lucy.code.request({
  protocol: 'https',
  method: 'get',
  domain: 'hacker-news.firebaseio.com',
  path: 'v0/topstories.json',
  returns: 'json'
}) %>
