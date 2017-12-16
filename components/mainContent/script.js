(function() {
  angular.module("myApp").controller("mainContentCtrl", MainContentController);

  function MainContentController() {
    var mcl = this;
    mcl.data = list;
  }

  var list = [{
      type: "Question added",
      topic: "Chartered Accountants (CA)",
      title: "Is CA Aditya Jain an overrated faculty for the CA final SFM?",
      answer: "",
      lastFollowed: "Last followed 1h ago",
      noOfAnswers: "2",
      chooseTo: "Answer",
      orChooseTo: "Pass",
      Followers: "4"
    },
    {
      type: "Answer 1",
      topic: "Life and Living",
      title: "Should I keep living if I'm fat, ugly, have a gap in my teeth,\
      a far back hairline, a huge forehead, and everybody tells me those things\
       every day of my life?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      lastFollowed: "Last followed 3h ago",
      noOfAnswers: "1",
      chooseTo: "Answer",
      orChooseTo: "Pass",
      Followers: "5"
    },
    {
      type: "Answer 2",
      topic: "topic 2",
      title: "title line 2",
      answer: "Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      lastFollowed: "Last followed 3h ago",
      noOfAnswers: "1",
      chooseTo: "Answer",
      orChooseTo: "Pass",
      Followers: "6"
    },
    {
      type: "Answer 3",
      topic: "topic 3",
      title: "title line 3",
      answer: "Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit, sed do \
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      lastFollowed: "Last followed 3h ago",
      noOfAnswers: "1",
      chooseTo: "Answer",
      orChooseTo: "Pass",
      Followers: "10"
    }
  ]
})();
