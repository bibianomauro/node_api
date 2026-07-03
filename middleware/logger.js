// @ desc     Logs req to console
function logger(req, res, next)
{
  const start = process.hrtime();

  res.on("finish", function()
    {
      const diff = process.hrtime(start);
      const time_ms = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3);
      const method = req.method;
      const url = req.originalUrl || req.url;
      const status = res.statusCode;
      const contentLength = res.get("content-length") || 0;

      console.log(`${method} ${url} ${status} - ${time_ms} ms - ${contentLength} bytes`);
    });
  
  next();
}

module.exports = logger;