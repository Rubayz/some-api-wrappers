const pckg = require("../Source/tenorApiWrap");
const config = require("../config.json");
pckg.getGIFBySeachTerm("hug", config.tenorAPI, "4");
pckg.getTrendingGIFs(config.tenorAPI, "4");
pckg.getGIFById(8776030, config.tenorAPI);