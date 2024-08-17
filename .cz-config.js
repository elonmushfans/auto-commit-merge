// module.exports = {

//     types: [
//       {value: '特性',     name: '特性:    一个新的特性'},
//       {value: '修复',      name: '修复:    修复一个Bug'},
//       {value: '文档',     name: '文档:    变更的只有文档'},
//       {value: '格式',    name: '格式:    空格, 分号等格式修复'},
//       {value: '重构', name: '重构:    代码重构，注意和特性、修复区分开'},
//       {value: '性能',     name: '性能:    提升性能'},
//       {value: '测试',     name: '测试:    添加一个测试'},
//       {value: '工具',    name: '工具:    开发工具变动(构建、脚手架工具等)'},
//       {value: '回滚',   name: '回滚:    代码回退'}
//     ],
  
//     scopes: [
//       {name: '模块1'},
//       {name: '模块2'},
//       {name: '模块3'},
//       {name: '模块4'}
//     ],
  
//     // it needs to match the value for field type. Eg.: 'fix'
//     /*
//     scopeOverrides: {
//       fix: [
//         {name: 'merge'},
//         {name: 'style'},
//         {name: 'e2eTest'},
//         {name: 'unitTest'}
//       ]
//     },
//     */
//     // override the messages, defaults are as follows
//     messages: {
//       type: '选择一种你的提交类型:',
//       scope: '选择一个scope (可选):',
//       // used if allowCustomScopes is true
//       customScope: 'Denote the SCOPE of this change:',
//       subject: '短说明:\n',
//       body: '长说明，使用"|"换行(可选)：\n',
//       breaking: '非兼容性说明 (可选):\n',
//       footer: '关联关闭的issue，例如：#31, #34(可选):\n',
//       confirmCommit: '确定提交说明?'
//     },
  
//     allowCustomScopes: true,
//     allowBreakingChanges: ['特性', '修复'],
  
//     // limit subject length
//     subjectLimit: 100
  
//   };



  module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}



module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72
}