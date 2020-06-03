import state from './state'
export default {
    handleTestMutations(state, data) {

        state.handleTestMutations = data
    },

      handleChangeCollapseFlag(state, data) {
        state.collapse = !state.collapse
      },


      handleDeleteTaskListTabelDetailList(state, indexObj) {

        state.taskList[indexObj.taskListIndex].content[indexObj.contentIndex].tabelDetailList.splice(indexObj.tabelDetailListIndex,1)
      
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


        console.log(addFromData)
      },


      handleChangeUser(state, data) {

        state.userFlag = !state.userFlag

      }
}