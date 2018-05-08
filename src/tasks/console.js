const path = require("path");
const repl = require("repl");
const replHistory = require("repl.history");

task("console", "Opens a sool console", async () => {
  const historyFile = path.join(config.paths.cache, "console_history");

  const theRepl = repl.start({ useGlobal: true, ignoreUndefined: true });

  replHistory(theRepl, historyFile);
});
