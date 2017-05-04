const APIUtil = require("./api_util.js");


function FollowToggle($el, options) {
    this.$el = $el;
    this.userId = $el.data("id") || options.userId;
    this.followState = $el.data("state") || options.followState;
    this.render();
    this.$el.on("click", (e) => this.handleClick(e));
}

FollowToggle.prototype.render = function() {
  if (this.followState === "followed") {
    this.$el.text("Unfollow");
  } else {
    this.$el.text("Follow");
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  this.disableButton();
  if (this.followState === "followed") {
    APIUtil.unfollowUser(this.userId)
      .then(()=>this.toggleState());
  } else {
    APIUtil.followUser(this.userId)
      .then(()=>this.toggleState());
  }
};

FollowToggle.prototype.toggleState = function(){
  this.followState = this.followState === "followed" ? "unfollowed" : "followed";
  this.$el.data("state", this.followState);
  this.enableButton();
  this.render();
};

FollowToggle.prototype.disableButton = function () {
  this.$el.prop("disabled", true);
};

FollowToggle.prototype.enableButton = function () {
  this.$el.prop("disabled", false);
};


module.exports = FollowToggle;
