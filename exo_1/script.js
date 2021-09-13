// you can write js here
function setItem(item) {
    return '<li class="list-group-item">\n' +
        '                                    <div class="todo-indicator bg-warning"></div>\n' +
        '                                    <div class="widget-content p-0">\n' +
        '                                        <div class="widget-content-wrapper" data-id="' + item.id + '">\n' +
        '                                            <div class="widget-content-left mr-2">\n' +
        '                                                <div class="custom-checkbox custom-control">' +
        '<input class="custom-control-input checkbox" id="exampleCustomCheckbox_' + item.id + '" type="checkbox" ' + (item.status ? 'checked' : '') + '><label\n' +
        '                                                        class="custom-control-label" for="exampleCustomCheckbox_' + item.id + '">&nbsp;</label></div>\n' +
        '                                            </div>\n' +
        '                                            <div class="widget-content-left">\n' +
        '                                                <div class="widget-heading">' + (item.status ? '<s>' + item.title + '</s>' : item.title) + '\n' +
        '                                                </div>\n' +
        '                                                <div class="widget-subheading"><i>By ' + item.author + '</i></div>\n' +
        '                                            </div>\n' +
        '                                            <div class="widget-content-right" >\n' +
        '                                                <button class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button>\n' +
        '                                                <button class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash"></i></button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </li>';
}

function render() {
    let ul = document.getElementById('list');
    datas.forEach(el => {
        ul.innerHTML += setItem(el);
    });
}

function addTodo() {
    let btn = document.getElementById('addTodoBtn');

    btn.addEventListener('click', event => {
        let id = datas.length + 1;
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        datas = [{ id: id, title: title, author: author, status: 0 }, ...datas];
        reRender();
    });
}

function reRender() {
    document.getElementById('list').innerHTML = '';
    render();
    deleteTodo();
    checkTodo();
    unCheckTodo();
}

function deleteTodo() {
    let btn = document.getElementsByClassName('btn-outline-danger');
    Array.from(btn).forEach(el => {
        el.addEventListener('click', event => {
            datas = datas.filter(item => item.id !== parseInt(el.parentNode.parentNode.dataset.id));
            reRender();

        });
    });
}

function checkTodo() {
    let btn = document.getElementsByClassName('btn-outline-success');
    Array.from(btn).forEach(el => el.addEventListener('click', event => {
        let item = datas.find(item => item.id === parseInt(el.parentNode.parentNode.dataset.id));
        item.status = true;
        reRender();
    }));
}

function unCheckTodo() {
    let btn = document.getElementsByClassName('custom-checkbox');
    Array.from(btn).forEach(el => el.addEventListener('click', event => {
        let item = datas.find(item => item.id === parseInt(el.parentNode.parentNode.dataset.id));
        item.status = !item.status;
        reRender();
    }));
}

document.addEventListener('DOMContentLoaded', function () {
    render();
    addTodo();
    deleteTodo();
    checkTodo();
    unCheckTodo();
});
