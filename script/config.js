const monogDb=require('mongodb')
const mongoDbClient=monogDb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const dataBaseName='task-manager'
mongoDbClient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{
    if(error)
    return console.log('unable to connect to database')
const db=client.db(dataBaseName)
// db.collection('users').insertOne({
//     name:'rishabh sharma',
//     age:'22'
// },(error,result)=>{
//     if(error)
//     console.log('unable to insert user..')
//     console.log(result.ops)
// }
// )
// })

db.collection('users').insertMany([
    {
    name:'rishabh sharma',
    age:'22'
},{
    name:'jason roy',
    age:23
}
],(error,result)=>{
    if(error)
    console.log('unable to insert user..')
    console.log(result.ops)
}
)
})
// fetch the data from database
mongoDbClient.connect(connectionUrl,{useUnifiedTopology:true},(error,client)=>{
    if(error)
    return console.log('unable to connect to database')
const db=client.db(dataBaseName)
db.collection('users').findOne({name:'rishabh sharma'},(error,user)=>{
    if(error)
    console.log('unable to find the data')
    console.log(user)
})
})