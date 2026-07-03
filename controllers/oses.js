// @desc      Get all OSes
// @route     GET /api/oses
// @access    Private
function get_oses(req, res, next)
{
  res
    .status(200)
    .json({
      success: true,
      msg: "Show all OSes",
    });
}

// @desc      Get one OS
// @route     GET /api/oses/:id
// @access    Private
function get_os(req, res, next)
{
  res
    .status(200)
    .json({
      success: true,
      msg: "Show OS: " + req.params.id,
    });
}

// @desc      Create new OS
// @route     POST /api/oses/
// @access    Private
function post_os(req, res, next)
{
  res
    .status(200)
    .json({
      success: true,
      msg: "Created OS",
    });
}

// @desc    Update OS
// @route   PUT /api/oses/:id
// @access  Private
function put_os(req, res, next)
{
  res
    .status(200)
    .json({
      success: true,
      msg: "Updates OS " + req.params.id,
    });
}

// @desc     Delete OS
// @route    DELETE /api/oses/:id
// @access   Private
function delete_os(req, res, next)
{
  res
    .status(200)
    .json({
      success: true,
      msg: "Deletes OS " + req.params.id,
    });
}

module.exports = {
  get_oses,
  get_os,
  post_os,
  put_os,
  delete_os,
};