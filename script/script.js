const btn_loadTodos = getID(`btn_loadTodos`);
const btn_refresh = getID(`btn_refresh`);

const total_tasks = getID(`total_tasks`);
const completed_tasks = getID(`completed_tasks`);
const pending_tasks = getID(`pending_tasks`);








btn_loadTodos.addEventListener("click", (e) => {
    e.preventDefault();

    const todos_container = getID(`todos_container`);

    todos_container.innerHTML = "";

    const todosUrl = "https://69f2bc63b15130b973531e7f.mockapi.io/todos";

    fetch(todosUrl)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((task) => {



                const title = task.title;
                const description = task.description;
                const id = task.id;
                const isDone = task.completed;



                const total = data.length;
                const completed = data.filter(task => task.completed === true).length;
                const pending = total - completed;


                total_tasks.innerText = total;
                completed_tasks.innerText = completed;
                pending_tasks.innerText = pending;



                const statusColor = isDone ? "emerald" : "rose";
                const statusLabel = isDone ? "Completed" : "Pending";

                const card = `
        <div
            class="card bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-all duration-300">
            <div class="card-body p-6 relative">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-slate-50/30 text-xs font-mono">#Task-${id}</span>
                    <span class="flex items-center gap-1.5 text-slate-50/50 uppercase text-sm tracking-wider font-mono">
                        ${statusLabel}
                        <div class="p-1.5 rounded-full bg-${statusColor}-500 animate-pulse"></div>
                    </span>
                </div>

                <h2 class="card-title text-slate-100 text-lg">${title}</h2>
                <p class="text-slate-400 text-sm leading-relaxed">
                    ${description}
                </p>

                <div class="card-actions rounded-full justify-end my-4 mb-8 pt-4 border-t border-white/5">
                    
                </div>

                <div class="absolute badge uppercase badge-ghost bg-slate-50/20 text-slate-50/70 p-4 rounded-full outline-none border-none bottom-2 right-4 mb-2">u1</div>
            </div>
        </div>
                    `;


                todos_container.insertAdjacentHTML("beforeend", card);
            });
        });
});





btn_refresh.addEventListener("click", (e) => {
    e.preventDefault();

    const todos_container = getID(`todos_container`);

    todos_container.innerHTML = "";

    const todosUrl = "https://69f2bc63b15130b973531e7f.mockapi.io/todos";

    fetch(todosUrl)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((task) => {



                const title = task.title;
                const id = task.id;
                const isDone = task.completed;



                const total = data.length;
                const completed = data.filter(task => task.completed === true).length;
                const pending = total - completed;


                total_tasks.innerText = total;
                completed_tasks.innerText = completed;
                pending_tasks.innerText = pending;



                const statusColor = isDone ? "emerald" : "rose";
                const statusLabel = isDone ? "Completed" : "Pending";

                const card = `
        <div
            class="card bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-all duration-300">
            <div class="card-body p-6 relative">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-slate-50/30 text-xs font-mono">#Task-${id}</span>
                    <span class="flex items-center gap-1.5 text-slate-50/50 uppercase text-sm tracking-wider font-mono">
                        ${statusLabel}
                        <div class="p-1.5 rounded-full bg-${statusColor}-500 animate-pulse"></div>
                    </span>
                </div>

                <h2 class="card-title text-slate-100 text-lg">Fix Navigation Bug</h2>
                <p class="text-slate-400 text-sm leading-relaxed">
                    ${title}
                </p>

                <div class="card-actions rounded-full justify-end my-4 mb-8 pt-4 border-t border-white/5">
                    
                </div>

                <div class="absolute badge uppercase badge-ghost bg-slate-50/20 text-slate-50/70 p-4 rounded-full outline-none border-none bottom-2 right-4 mb-2">u1</div>
            </div>
        </div>
                    `;


                todos_container.insertAdjacentHTML("beforeend", card);
            });
        });
});






function getID(idName) {
    return document.getElementById(idName);
}
