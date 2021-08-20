export default [
  {
    name: 'saveModule',
    method: 'POST',
    desc: '新增模板',
    path: 'organization/sysUserResourceApply/saveModule',
    mock: false,
    data: {
      sysUserResourceApplyPOList: []
    }
  },
  {
    name: 'showModuleList',
    method: 'GET',
    desc: '获取模块列表',
    path: 'organization/sysUserResourceApply/showModuleList',
    mock: false,
    params: {}
  },
  {
    name: 'deleteModule',
    method: 'GET',
    desc: '删除模板',
    path: 'organization/sysUserResourceApply/deleteModule',
    mock: false,
    params: {
      id: ''
    }
  }
];
