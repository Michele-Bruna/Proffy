const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  // inserir dados
  proffyValue = {
    name: 'Michele Bruna', 
    avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQEsV8eKWpSwrA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=A25yxEjsTt3qFI6PA5yozvVEIRgOFbiRoPcOWsvrCAw',
    whatsapp: '34 993320100000',
    bio: 'Aprendiz NLW #2',
  }

classValue = {
  subject: '1',
  cost: '45',
  // o proffy id virá pelo banco de dados
}

classScheduleValues = [
  //class_id virá pelo banco de dados, após cadastramos a class
  {
    weekday: 1,
    time_from: 250,
    time_to: 1250
  },
  {
    weekday: 0,
    time_from: 520,
    time_to: 1250
  },
]

//await createProffy(db, {proffyValue, classValue, classScheduleValues})
  // consultar os dados inseridos

  // todos os proffys 
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor, obs.: o * quer dizer todas as colunas
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.* 
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1; 
  `)
  //console.log(selectClassesAndProffys)

  // o horario a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horario do time_from precisa ser antes ou igual ao horario solicitado 
  // o time_to precisa ser acima 
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*                     
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"      
    AND class_schedule.time_to > "520"
  `)

   // ELE DEIXOU O DELE COM 1300 NAS DUAS OPÇÕES QUE EU DEIXEI 520
  //console.log(selectClassesSchedules)

})