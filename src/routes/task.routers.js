const express= require ('express');
const task = require('../models/task');
const router= express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    
    res.json(tasks);
       
});

router.get('/:id', async (req, res) =>{
    const task = await Task.findByIdAnUpdate(req.params.id);
    res.json(task);
});

router.post('/', async(req,res) => {
    const{ title,  description } = req.body;
    const task = new Task({title, description});
    await task.save();


    res.json({status: 'task Saved'});
});
router.put('./:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask= {title, description};
    await task.findByIdAnUpdate (req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAnUpdate(req.params.id);
    res.json({status: 'task Deleted'});
});

module.exports = router;