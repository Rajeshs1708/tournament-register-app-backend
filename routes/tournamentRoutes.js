const express = require('express')
const router = express.Router()
const {
  createDB,
  createTournamentTable,
  createParticipantTable,
  createTournamentList,
  createParticipantList,
  showTournamentList,
  showParticipantList,
  showSingleTournament,
  showSingleParticipant,
  updateTournament,
  updateParticipant,
  deleteTournament,
  deleteParticipant
} = require('../controllers/tournamentController')

//ROUTES
router.get('/create/database', createDB)
router.get('/create/tournament/table', createTournamentTable)
router.get('/create/participant/table', createParticipantTable)
router.post('/create/tournament/list', createTournamentList)
router.post('/create/participant/list', createParticipantList)
router.get('/show/tournament/list', showTournamentList)
router.get('/show/participant/list', showParticipantList)
router.get('/tournament/:id', showSingleTournament)
router.get('/participant/:id', showSingleParticipant)
router.put('/update/tournament/:id', updateTournament)
router.put('/update/participant/:id', updateParticipant)
router.delete('/delete/tournament/:id', deleteTournament)
router.delete('/delete/participant/:id', deleteParticipant)

module.exports = router
