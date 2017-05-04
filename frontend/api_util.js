const APIUtil = {
  followUser: id =>   { return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      data: {user_id: id},
      dataType: 'JSON'
    });},

  unfollowUser: id => { return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      data: {user_id: id},
      dataType: 'JSON'
    });},

  searchUsers: (queryVal, success) => { return $.ajax({
    url: `/users/search`,
    method: 'GET',
    data: {query: queryVal},
    dataType: 'JSON',
    success: res => success(res)
  });},

  createTweet: (data) => { return $.ajax({
    url: `/tweets`,
    method: 'POST',
    data: data,
    dataType: 'JSON'
  });}
};



module.exports = APIUtil;
