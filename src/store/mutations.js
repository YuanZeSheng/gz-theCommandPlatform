import state from './state'
export default {
  handleTestMutations(state, data) {

    state.handleTestMutations = data
  },

  handleChangeCollapseFlag(state, data) {
    state.collapse = !state.collapse
  },


  handleDeleteTaskListTabelDetailList(state, indexObj) {

    state.taskList[indexObj.taskListIndex].content[indexObj.contentIndex].tabelDetailList.splice(indexObj.tabelDetailListIndex, 1)

  },


  handleChangeUpdateTaskList(state, data) {

    let indexObj = data.indexObj

    let updateObj = data.updateObj

    state.taskList[indexObj.taskListIndex].content[indexObj.contentIndex].tabelDetailList[indexObj.tabelDetailListIndex] = updateObj


  },

  handleAddFromData(state, data) {
    let addIndexObj = data.addIndexObj

    let addFromData = data.addFromData

    state.taskList[addIndexObj.taskListIndex].content[addIndexObj.contentIndex].tabelDetailList.push(addFromData)

  },


  handleChangeUsers(state, data) {

    state.userFlag = !state.userFlag

  },


  // 增加组织机构
  handleAddOrganization(state, data) {
    state.organization.tabelDetailList.push(data)

    let organizaObj = {
      value: data.id,
      label: data.organizationName
    }

    state.organizationSelectList.push(organizaObj)
  },

  // 编辑组织机构
  handleUpdateOrganizationList(state, data) {
    state.organization.tabelDetailList[data.updateIndex] = data.updateFrom


    state.organizationSelectList.map(item => {
      if (item.id == data.updateFrom.id) {
        item.id = data.updateFrom.id
        item.value = data.updateFrom.organizationName
        item.label = data.updateFrom.organizationName
      }
    })
  },

  // 删除组织机构
  handleDeleteOrganizationItem(state, data) {
    state.organization.tabelDetailList.splice(data, 1)
  },

  // 添加子任务
  handleAddTask(state, data) {
    state.taskPageList[0].content.push(data)
  },

  // 删除子任务
  handleDelelteChildrenTask(state, data) {
    state.taskPageList[0].content.splice(data, 1)
  },

  // 删除任务组
  handleDelelteGroupTask(state, data) {

    if (data.indexs != undefined) {
      state.taskPageList[1].content[data.index].tabelDetailList.splice(data.indexs, 1)
    } else {
      state.taskPageList[1].content.splice(data.index, 1)
    }
  },
}