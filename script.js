const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }



};



let timer;
const timerDisplay = document.getElementById('timer');
const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    stopTimer();
    const duration = parseInt(durationInput.value, 10);
    let timeLeft = duration;
    updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            updateTimerDisplay(timeLeft);
        } else {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimerDisplay(timeLeft) {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const newTask = taskInput.value;

    if (newTask.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask));

    const markAsDoneButton = document.createElement("button");
    markAsDoneButton.innerHTML = "Mark as Done";
    markAsDoneButton.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(markAsDoneButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

const button = document.querySelector('#my-button');

button.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});

button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});


const element = document.querySelector('.element');

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.innerHTML = 'This is a tooltip!';

document.body.appendChild(tooltip);

element.addEventListener('mouseover', function() {
    tooltip.style.display = 'block';
    tooltip.style.left = this.offsetLeft + 'px';
    tooltip.style.top = this.offsetTop + 'px';
});

element.addEventListener('mouseout', function() {
    tooltip.style.display = 'none';
});
