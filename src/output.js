'use strict';

class Output {
  /**
   * Standard output log.
   * 
   * @param {String} action - action name
   * @param {String} content - log content
   */
  static stdout(action, content) {
    console.log(`[${action}] => ${content}`);
  }

  /**
   * Standard error output log.
   * 
   * @param {String} action - action name
   * @param {Object} error - error object
   */
  static stderr(action, error) {
    console.error(`[${action}] => ${error.message}`);
  }
}

module.exports = Output;
