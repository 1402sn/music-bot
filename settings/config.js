
require("dotenv").config();

module.exports = {

  /**
   * @description requires settings for the bot
   */

  TOKEN: process.env.TOKEN || "MTE5ODE4OTY2ODU0NjY1NDIwOA.GT6glH.xZ6Ue2PE2Mga7ZUIXV4EIUXWBc1axZMzshhy_A",  // your bot token
  PREFIX: process.env.PREFIX || "+", //<= default is #  // bot prefix
  OWNER_ID: process.env.OWNER_ID || "954533100573065226", //your client id

  /**
   *
   */
  EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

  /**
   * @description boolean settings for the bot
   */
  LEAVE_EMPTY: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
  LEAVE_FINISH: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
  LEAVE_STOP: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}
