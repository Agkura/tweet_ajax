const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.input = $el.find("input");
    this.ul = $el.find(".users");
    this.renderResults = this.renderResults.bind(this);
    this.input.on("input", (e) => this.handleInput(e));

  }

  handleInput(e) {
    this.input = this.$el.find("input").val();
    APIUtil.searchUsers(this.input, this.renderResults);
  }

  renderResults(arr) {
    this.ul.empty();
    arr.forEach((el) => {
      let follow = "follow";
      if (el.followed) {follow = "followed";
      } else { follow = "unfollowed";}
      // let option = { userId: el.id, followState: el.followed };
      this.ul.append(
        $(`<li>
          <a href="/users/${el.id}">${el.username}</a>
          <button type="button" class="follow-toggle" data-id="${el.id}"
          data-state="${follow}"></button>
          </li>`));
    });
    $(()=>{
      $('.follow-toggle').each((index, el) => {
        new FollowToggle($(el));
      });
    });
  }
}


module.exports = UsersSearch;
