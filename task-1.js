const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const frontendTimeSpent = [];
const bugTimeSpent = [];

tasks.map(object => {
    if (object.category === 'Frontend') {
        frontendTimeSpent.push(object.timeSpent);
    }
    if (object.type === 'bug') {
        bugTimeSpent.push(object.timeSpent);
    }
});

const totalFrontendHours = frontendTimeSpent.reduce((acc, item) => {
    return acc + item;
});
console.log('The total amount of time spent working on tasks from the "Frontend" category: ' + totalFrontendHours + ' hours.');

const totalBugHours = bugTimeSpent.reduce((acc, item) => {
    return acc + item;
});
console.log('The total amount of time spent working on tasks such as "bug"": ' + totalBugHours + ' hours.');

const wordUI = tasks.filter(object => {
    return object.title.toUpperCase().indexOf('UI') > -1;
}).length;
console.log('The number of tasks that have the word "UI" in the title: ' + wordUI);


const tasksNumber = tasks.reduce((acc, object) => {
    if (object.category === 'Frontend') {
        acc.Frontend++;
    }
    if (object.category === 'Backend') {
        acc.Backend++;
    }
    return acc;
}, {Frontend: 0, Backend: 0});
console.log(tasksNumber);


const timeArray = tasks.filter(object => object.timeSpent > 4).map(task => {
    return ({title: task.title, category: task.category});
});
console.log(timeArray);









