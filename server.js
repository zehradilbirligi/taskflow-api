const express = require("express");
console.log("benim ilk node.js uygulamam");
const app = express();
const logger = (req, res, next) =>{
    const time = new Date().toLocaleString();
    console.log(`${req.method} ${req.originalUrl} - ${time}`);
    next();
    
};
app.use(logger);
app.use(express.json());
const tasks = [
     {
        id: 1,
        title: "Ana sayfa tasarımı",
        description: "Web sitesinin ana sayfasını hazırlama",
        priority: "high",
        assignee: "Zehra",
        status: "pending"
    },
    {
        id: 2,
        title: "Mobil uyumluluk",
        description: "Web sitesini telefon ekranlarına uygun hale getirme",
        priority: "medium",
        assignee: "Ayşe",
        status: "in-progress"
    }
];
app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }
    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.priority = req.body.priority ?? task.priority;
    task.assignee = req.body.assignee ?? task.assignee;
    task.status = req.body.status ?? task.status;

    res.json(task);
});
app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json({
        message: " başarıyla silindi.",
        task: deletedTask
    });
});

app.post("/tasks",(req,res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({
        message: " başarıyla oluşturuldu.",
        task: newTask
    });
    });
    app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    res.json(task);
});


app.listen(3001, () => {
    console.log("sunucu 3001 portunda çalışıyor");
});