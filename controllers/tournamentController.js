const db = require('../db/database')

//CREATE DB
exports.createDB = (req, res) => {
  let q = 'CREATE DATABASE tournament'
  db.query(q, (err, result) => {
    if (err) throw err
    return res.status(201).send('DB Created')
  })
}
//CREATE TABLE FOR TOURNAMENT
exports.createTournamentTable = (req, res) => {
  let q =
    'CREATE TABLE tournamentDetail(id INT AUTO_INCREMENT primary key NOT NULL , tournament_name VARCHAR(255), start_date DATE, end_date DATE, status_of_tournament VARCHAR(255))'
  db.query(q, (err, result) => {
    if (err) throw err
    return res.status(201).send('Tournament Table Created')
  })
}

//CREATE TABLE FOR PARTICIPANT
exports.createParticipantTable = (req, res) => {
  let q =
    'CREATE TABLE participantDetail(id INT AUTO_INCREMENT primary key NOT NULL ,participant_name VARCHAR(255), tournament_name VARCHAR(255))'
  db.query(q, (err, result) => {
    if (err) throw err
    return res.status(201).send('Participant Table Created')
  })
}

//CREATE LIST FOR TOURNAMENT
exports.createTournamentList = (req, res) => {
  let q = 'INSERT INTO tournamentDetail SET ?'
  const { tournament_name, start_date, end_date, status_of_tournament } =
    req.body
  db.query(
    q,
    { tournament_name, start_date, end_date, status_of_tournament },
    (err, result) => {
      if (err) return res.send(err)
      return res.status(200).send(result)
    }
  )
}

//CREATE LIST FOR PARTICIPANT
exports.createParticipantList = (req, res) => {
  let q = 'INSERT INTO participantDetail SET ?'
  const { tournament_name, participant_name } = req.body
  db.query(q, { tournament_name, participant_name }, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result)
  })
}

//SHOW LIST FROM TOURNAMENT
exports.showTournamentList = (req, res) => {
  let q = 'SELECT * FROM tournamentDetail'
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result)
  })
}
//SHOW LIST FROM PARTICIPANT
exports.showParticipantList = (req, res) => {
  let q = 'SELECT * FROM participantDetail'
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result)
  })
}

//SHOW SINGLE TOURNAMENT
exports.showSingleTournament = (req, res) => {
  let q = `SELECT * FROM tournamentDetail  WHERE id=${req.params.id}`
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result[0])
  })
}
//SHOW SINGLE PARTICIPANT
exports.showSingleParticipant = (req, res) => {
  let q = `SELECT * FROM participantDetail  WHERE id=${req.params.id}`
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result[0])
  })
}

//UPDATE TOURNAMENT
exports.updateTournament = (req, res) => {
  const { tournament_name, start_date, end_date, status_of_tournament } =
    req.body
  let q = `UPDATE tournamentDetail SET ? WHERE id=${req.params.id}`
  db.query(
    q,
    { tournament_name, start_date, end_date, status_of_tournament },
    (err, result) => {
      if (err) return res.send(err)
      return res.status(200).send(result)
    }
  )
}
//UPDATE PARTICIPANT
exports.updateParticipant = (req, res) => {
  const { tournament_name, participant_name } = req.body
  let q = `UPDATE participantDetail SET ? WHERE id=${req.params.id}`
  db.query(q, { tournament_name, participant_name }, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send(result)
  })
}

//DELETE TOURNAMENT
exports.deleteTournament = (req, res) => {
  let q = `DELETE FROM tournamentDetail WHERE id=${req.params.id}`
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send({ data: 'Tournament Deleted Successfully' })
  })
}

//DELETE PARTICIPANT
exports.deleteParticipant = (req, res) => {
  let q = `DELETE FROM participantDetail WHERE id=${req.params.id}`
  db.query(q, (err, result) => {
    if (err) return res.send(err)
    return res.status(200).send({ data: 'Participant Deleted Successfully' })
  })
}
