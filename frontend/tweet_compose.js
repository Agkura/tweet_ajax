const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor($form) {
    this.$form = $form;
    this.content = $form.find('textarea');
    this.$form.on("submit", (e) => this.submit(e));
  }

  submit(e) {
    e.preventDefault();
    let form = this.$form.serializeJSON();
    APIUtil.createTweet(form);
    this.disableForm();
  }

  disableForm() {
    $(':input').each((el) => {
      el.prop("disabled", false);
    });
  }

  clearInput() {
    $(':input').each(el => {
      el.val("");
    });
  }

  handleSuccess() {
    
  }
}


module.exports = TweetCompose;
