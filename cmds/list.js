'use strict';

class ListCommand {
  constructor() {
    this.command = 'list';
    this.desc = 'List directory structrue.';
  }

  builder() {
    return {};
  }

  handler(argv) {
  }
}

module.exports = new ListCommand();
