export default [
  {
    name: "saveModule",
    method: "POST",
    desc: "新增模板",
    path: "organization/sysUserResourceApply/saveModule",
    mock: false,
    data: {
      sysUserResourceApplyPOList: []
    }
  },
  {
    name: "showModuleList",
    method: "GET",
    desc: "获取模块列表",
    path: "/example/1626933858631",
    mock: false,
    params: {
      username: "",
      password: ""
    }
  }
];
