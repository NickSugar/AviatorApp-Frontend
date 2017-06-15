(function() {
  'use strict'

  angular.module('aviatorsApp')
    .component('flashCard', {
      templateUrl: './flashCardComponent/flashCard.html',
      controller: ['authService', 'aviatorsAPIservice', '$state', flashCardCtrl]
    });

  function flashCardCtrl(authService, aviatorsAPIservice, $state) {

        const vm = Object.assign(this, {
          flipCard,
          answer,
          goToLesson,
          questionCard: true,
          answerCard: false,
          flashCard: null
        })

        var flashCards = [
          {
            id: 1,
            lesson_id: 13,
            question: 'What is the wing span of the Gobosh"',
            answer: 'The maximum speed the flaps can be extended',
            answeredCorrectly: false,
            timeAnsweredCorrect: null
          },
          {
            id: 2,
            lesson_id: 13,
            question: 'Discribe "VFE"',
            answer: 'The maximum speed the flaps can be extended',
            answeredCorrectly: false,
            timeAnsweredCorrect: null
          },
          {
            id: 3,
            lesson_id: 13,
            question: 'Discribe "VY"',
            answer: 'The airspeed for the maximum increase of altitude in the shortest time',
            answeredCorrectly: false,
            timeAnsweredCorrect: null
          },
        ]

        vm.flashCard = flashCards[0]


        function flipCard() {
          vm.questionCard = !vm.questionCard
          vm.answerCard = !vm.answerCard
        }

        function answer(turnOut, cardId) {
          console.log('hi');
          if (turnOut === 'right') {
            flashCards[cardId - 1].timeAnsweredCorrect = Date.now()
            vm.flashCard = flashCards[cardId]
            flipCard()
          }
        }

        function goToLesson(lesson_id) {
          aviatorsAPIservice.getLessonContent(lesson_id)
            .then(content=>{
              $state.go('lesson', {content})
            })
        }
      }
}())
