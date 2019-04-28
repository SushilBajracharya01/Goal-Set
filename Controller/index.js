const Goal = require("../Models/Goal");

exports.showIndex = async (req, res) => {
    const goals = await Goal.find({});
    // console.log(goals);
    res.render('index.ejs', { name: "sushil", goals: goals })
}


exports.formShow = (req, res) => {
    res.render('add.ejs');
}

exports.formSubmit = (req, res) => {
    let title = req.body.title;
    if (title === undefined || title === "") {
        res.send("you entered nothing!!!");
    }
    else {
        const goal = new Goal(
            {
                title
            }
        );

        goal.save();
    }

    res.redirect("/");
}

exports.deleteGoal = async (req, res) => {
    await Goal.remove({ _id: req.params.id });
    res.redirect("/");
}

exports.showAbout = (req, res) => {
    res.render('about.ejs');
}