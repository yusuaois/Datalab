use customers;

db.books.insertMany([{
 book_id : 552020, 
 author : "D. Sullivan", 
 title : "NoSQL for Mere Mortals", 
 publisher : "Addison-Wesley", 
 year : 2019, 
 ISBN : 9080134023212, 
 comments:[{author : "Anonymous", text : "How do I get a copy?"}] 
 },
 {
 book_id : 3450, 
 author : ["P. Saladage", "M. Fowler"], 
 title : "NoSQL Distilled", 
 publisher : "Addison-Wesley", 
 year : 2022, 
 ISBN : 9080321826626, 
 comments:[{author : "Matt", text : "Nice overview of SQL"},{author : "Thomas", text : "Still relevant"}] 
}]
 )

db.books.find({$and:[{"year":{$gte:2019}},{"year":{$lte:2024}}]},{})

db.books.find({"book_id":{$ne:552020}},{})

db.books.find({$or:[{"author":"D.Sullivan"},{"ISBN":9780134023212}]},{})

db.books.find({$or:[{"ISBN":9876543210},{"ISBN":0123456789}]},{})

db.books.find({"title":/SQL/},{})

db.books.find({"publisher":"Addison-Wesley"},{})

db.books.find({$and:[{"year":2019},{"title":/Mortals/}]},{}).sort({"title":1})

db.books.update({"year":2019},{$set:{"subject":"computing"}},{multi:true})

