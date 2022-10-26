window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        //prevents the page from reloading once submitted
        e.preventDefault();

        //picks the value stored on the input variable and stores it under the new variable task
        // const task = input.Value;
        const task = input.value;
        if (task == "") {
            alert("task field can't be blank, enter some tasks");
            return 0;
        }

        //create a new element named task_el that creates a div element
        const task_el = document.createElement('div');


        //assign the class 'task' to the element created
        task_el.classList.add('task');

        // same workflow as above        
        const task_content_el = document.createElement('li');
        task_content_el.classList.add('content');

        // make the task_content_el a child of the task task_el (div)
        task_el.appendChild(task_content_el);

        // create an input field to store the task values
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        // assign the task to the input field created above
        task_input_el.value = task;


        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit')
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete')
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        input.value = '';

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_del_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
            ``
        });
    });
});

