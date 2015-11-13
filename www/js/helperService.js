'use strict';
angular.module('starter')
.service('helperService', function () {
    this.hello = function () {
        return "Hello World";
    };
    this.toBool = function (val) {
        if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
            return false;
        else if (val == true || val == 'true' || val == 'True')
            return true;
        else
            return 'unidentified';
    };
    this.shuffle = function (array) {
        var currentIndex = array.length, temp, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }
    this.extend = function (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }
        return out;
    };
})


.service('awsService',function(localStorageService){
 var topics = [
                { title: 'Urinary System', desc:'Urinary System', id: 1 ,url:'data/img/kidney.png'},
                { title: 'Biochemistry', desc:'Identity and Access Management', id: 2 ,url:'data/img/biochemistry.jpg'},
                { title: 'Diabetes',desc:'Simple Storage Service',  id: 3 ,url:'data/img/diabetes.png'},
                { title: 'Neuroanatomy', desc:'Relational Database Service', id: 4 ,url:'data/img/brain.png'},
                { title: 'Circulation', desc:'Elastic Compute Cloud', id: 5 ,url:'data/img/circulation.png'},
                { title: 'Pathology', desc:'Simple Workflow Service', id: 6 ,url:'data/img/pathology.png'},
                { title: 'Syndromes', desc:'Subnets, NACLs, Gateways, IPs', id: 7 ,url:'data/img/syndromes.png'},
                { title: 'Respiration', desc:'Easy to begin, Impossible to outgrow', id: 8 ,url:'data/img/respiration.png'},
                { title: 'Pharmacology 1',desc:'Pharmacology 1',  id: 9 ,url:'data/img/pill.png'},
                { title: 'Pharmacology 2',desc:'Push Notification Service',  id: 10 ,url:'data/img/pill.png'},
                { title: 'Physiology', desc:'Amazons NoSQL Database', id: 11 ,url:'data/img/organism.png'},
                { title: 'Nervous system', desc:'Templates and Stacks', id: 12 ,url:'data/img/nervous.png'},
                { title: 'Lymphatic System', desc:'Templates and Stacks', id: 13 ,url:'data/img/lymphatic.png'},
                { title: 'Gastrointestinal', desc:'Templates and Stacks', id: 14 ,url:'data/img/stomach.png'},
                { title: 'Integumentary', desc:'Templates and Stacks', id: 15 ,url:'data/img/skin.png'},
                { title: 'Behavioral Science', desc:'Templates and Stacks', id: 16 ,url:'data/img/mind.png'}
              ];

    var mockExams = [
                { title: 'Practice Exam 1', id: 100 ,url:'data/img/exam.jpg'},
                { title: 'Practice Exam 2', id: 200 ,url:'data/img/exam.jpg'},
                { title: 'Certification', id: 300 ,url:'data/img/certified.png'}
               
              ];

 var timerSetting;

 function getPreviousScore(topicId,score) {

            var arr = localStorageService.get('scoreRecord');
            var oldScore = -1;
            if(arr) {
               arr.forEach(function(obj,index) {
                    if(obj.topicId === topicId) {
                         oldScore = obj.bestScore;
                         
                    }
               });
            }
            return oldScore;
 }

 function updateLocalStorage(topicId,score){


                         var arr = localStorageService.get('scoreRecord');
                         if(arr) {
                            var scoreUpdated = false;
                            arr.forEach(function(obj,index) {
                                if(obj.topicId === topicId) {
                                     obj.bestScore = score;
                                     scoreUpdated = true;
                                }
                            });

                             if(scoreUpdated) {
                                localStorageService.set('scoreRecord',arr);
                             } else {
                                  var obj = {};
                                  obj.topicId = topicId;
                                  obj.bestScore = score;
                                  arr.push(obj);
                                  localStorageService.set('scoreRecord',arr);
                             }
                         } else {
                                  var scoreList = [];
                                  var obj = {};
                                  obj.topicId = topicId;
                                  obj.bestScore = score;
                                  scoreList.push(obj);
                                  localStorageService.set('scoreRecord',scoreList);

                         }
 }
  return {
            getTopics: function () {
                  var scoreList =   localStorageService.get('scoreRecord');
                  if(scoreList) {
                     topics.forEach(function(topic,index) {
                        scoreList.forEach(function(scoreRecord, i) {
                            if(topic.id == scoreRecord.topicId) {
                                topic.bestScore = scoreRecord.bestScore;
                                topic.bestScore+='%';
                            }
                        });
                     });
                  }
                 
              return topics;
               
            },
            getMockExams: function () {
                  var scoreList =   localStorageService.get('scoreRecord');
                  if(scoreList) {
                     mockExams.forEach(function(mockExam,index) {
                        scoreList.forEach(function(scoreRecord, i) {
                            if(mockExam.id == scoreRecord.topicId) {
                                mockExam.bestScore = scoreRecord.bestScore;
                                mockExam.bestScore+='%';
                            }
                        });
                     });
                  }
                 
              return mockExams;
               
            },

       
               updateScoreForTopics : function(topicId,score) {
                    
                   topics.forEach(function(topic,index) {
                     if(topic.id == topicId) {
                          var oldScore = getPreviousScore(topicId,score);
                          if(oldScore == -1) {
                              topic.bestScore = score;
                              topic.bestScore+='%';
                              updateLocalStorage(topicId,score);
                          } else {
                            if(oldScore < score) {
                                topic.bestScore = score;
                                topic.bestScore+='%';
                                updateLocalStorage(topicId,score);
                            }
                          }

                           
                        
                     }

                  });

                    mockExams.forEach(function(mockExam,index) {
                     if(mockExam.id == topicId) {
                          var oldScore = getPreviousScore(topicId,score);
                           if(oldScore == -1) {
                               mockExam.bestScore = score;
                               mockExam.bestScore+='%';
                               updateLocalStorage(topicId,score);
                           } else {
                              if(oldScore < score) {
                                 mockExam.bestScore = score;
                                 mockExam.bestScore+='%';
                                 updateLocalStorage(topicId,score);
                            }
                         }
                     }

                  });
            },
            setTimerSettings: function(val) {
                if(val) timerSetting = 'on';
                else timerSetting = 'off';

            },
            getTimerSettings: function() {
                return timerSetting;
            }
            
            
        };

})

;
