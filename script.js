let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
//let btnClear = $('#btnClear')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')
let btnSort = $('#btnSort')

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
}
function clearDone() {
    $('#ulTasks .done').remove()
}
function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}


inpNewTask.keypress((e) => {
    //console.log(e.which)
    if (e.which == 13) addItem()
})
btnAdd.click(addItem)



btnReset.click(() => inpNewTask.val(''))
btnCleanup.click(clearDone)
btnSort.click(sortTasks)