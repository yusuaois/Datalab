use db customers;

db.employee.insertMany([
		{empNo:'E55',lastName:'Carmen',firstName:'Silva',hours:450,gender:'F'},
		{empNo:'E44',lastName:'Ryad',firstName:'Patel',hours:380,gender:'M'},
		{empNo:'E66',lastName:'Susan',firstName:'Joyner',hours:350,gender:'F'},
		{empNo:'E77',lastName:'Waiman',firstName:'Zhu',hours:400,gender:'M'}
]
)

db.employee.find();

db.employee.find({},{"firstName":1 ,"lastName":1});
db.employee.find({"hours":{$gt:400}},{"empNo":1 ,"lastName":1,"hours":1});
db.employee.find({"lastName":/^S/},{"lastName":1});
db.employee.find({"gender":{$eq:'F'}},{"firstName":1,"lastName":1}).sort({"firstName":1});
db.employee.count({"hours":{$lt:400}});
db.employee.find({$or:[{"gender":{$eq:'F'}},{"hours":{$gt:350}}]},{"firstName":1,"lastName":1}).sort({"lastName":1})



