'use strict';

var input = document.querySelector('.form-inp');
var listTask = document.querySelector('.list-task');

function addTask(e) {
            // var tg = e.target

            // console.log(tg);

            if (e.which == 13) {
                        if (this.value !== "") {

                                    var itemTask = document.createElement('li'),
                                        check = document.createElement('input'),
                                        wrpIcon = document.createElement('span'),
                                        icon = document.createElement('i'),
                                        nameTask = document.createElement('span');

                                    check.type = 'checkbox';
                                    check.style.display = 'none';
                                    itemTask.classList.add('item-task');
                                    // ckeck.classList.add('check-hidden')
                                    wrpIcon.classList.add('icons');
                                    // icon.classList.add('icon-ckecked')


                                    itemTask.addEventListener('click', function (e) {
                                                // icon.classList.add('icon-ckecked')
                                                var targ = e.target;
                                                var child = targ.children[1];
                                                var subchild = child.children[0];
                                                subchild.classList.add('icon-checked');
                                    });

                                    nameTask.classList.add('text');
                                    nameTask.textContent = this.value;

                                    itemTask.appendChild(check);
                                    itemTask.appendChild(wrpIcon);
                                    wrpIcon.appendChild(icon);

                                    itemTask.appendChild(nameTask);

                                    listTask.appendChild(itemTask);
                                    this.value = '';
                        }
            }
}

input.addEventListener('keyup', addTask);