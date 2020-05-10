module.exports = {
  SuccessStories: () => {
    // [SNo , "Title" , "Date" , "Image" , "Dec"]
    return SuccessStoriesPageData();
  },
  SuccessStoriesDetails: no => {
    let data = SuccessStoriesPageData();
    let index = -1;
    data.forEach((ele, i) => {
      if (ele[0] == no) {
        index = i;
      }
    });
    if (index == -1) {
      index = 0;
    }
    let successstoriesdata = {
      no: no,
      title: data[index][1],
      data: data[index][2],
      image: data[index][3],
      description: data[index][4]
    };
    return successstoriesdata;
  }
};

function SuccessStoriesPageData() {
  let dummyData = [
    [
      1,
      "MY STORY- HARSH SHEORAN",
      "October 11, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      2,
      "MY JOURNEY- SAHIL DUTT (NCC SPECIAL ENTRY)",
      "October 1, 2019",
      "2.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t … "
    ],
    [
      3,
      "UNDERSTANDING NRC- Importance from SSB prospective",
      "September 7, 2019",
      "3.png",
      "What is NRC? NRC has its roots in the 1979-85 Assam agitation against foreigners marked by violent classes. Strikes and protests across the north eastern states. It was sparked by concerns that indigenous people of Assam were at risk of being outnumbered by outsiders reducing the opportunities for the economic advancement of the locals. The …"
    ],
    [
      4,
      "MY STORY- ABHISHEKMANI TRIPATHI",
      "May 20, 2019",
      "4.png",
      "Hello friends, I am AbhishekMani tripathi. I Completed my XII from Rashtriya Military school Bangalore in March 2018. In the School I was good in academics and average in sports. Initially when I joined the school, I had a lot of stage fear but with the help of my teachers and friends I was able …"
    ],
    [
      5,
      "MY SUCCESS STORY- NISHANT PANDEY",
      "April 22, 2019",
      "5.png",
      "Hello everyone, I’m cdt. Nishant Pandey of rashtriya military school, Dholpur. This is my story of clearing my ssb in first attempt. My father was in army and I have seen army life since my childhood and wanted to be one of them so I joined RMS Dholpur. There I learnt many games and participated …"
    ],
    [
      6,
      "MY STORY- PANKAJ BHADOURIYA",
      "April 11, 2019",
      "6.png",
      "Hello everyone!! I’m Cdt PANKAJ BHADOURIYA RMS Dholpur (2011-2018) This is the story of my life starting from my hometown Bhind till 11 SSB Allahabad. I’m a son of an Army Man so my tilt towards defence forces was nothing new or unique. I always wanted to be an Army officer and for that I’ve …"
    ],
    [
      7,
      "HOW I CLEARED MY SSB IN FIRST ATTEMPT- SAHIL KUMAR",
      "April 3, 2019",
      "7.png",
      "Hello everyone! I am cadet Cadet Sahil Kumar of Rashtriya Military School Bangalore . I belong to Kurukshetra in Haryana and have a defence background .The desire and Zeal of joining the forces have been there since the childhood but the flames were fanned after i joined RMS Bangalore .Having a potential in academics i …"
    ],
    [
      8,
      "MY JOURNEY TOWARDS MY GOAL",
      "March 28, 2019",
      "8.png",
      "Hello friends my name is Trilok Singh. I am from Jodhpur, Rajasthan. I completed my education from Army Public School Jodhpur. I was always keen to join armed forces as an officer, my father being the biggest motivation. So during my class 12th I started preparing for NDA written but couldn’t clear it in first …"
    ],
    [
      9,
      "HOW I LIVED MY DREAM- SPARSH KANKANE",
      "February 13, 2019",
      "9.png",
      "Hello everyone!!! Myself Cdt. 3098 Sparsh Kankane, School Captain, RMS Dholpur (2018-19) This blog is the story of my life till now, the journey from Orai-my hometown to Dholpur and then to 2 AFSB, Mysore… Let me tell you, I belong to a very humble family and one in which nobody has ever served in …"
    ],
    [
      10,
      "A Candidates Insight to 5 Days of SSB",
      "January 25, 2019",
      "10.png",
      "Hey everyone, we are going to Share the experience of one of our Candidates who was able to clear the first two SSB of his life. His experience is a must read for all the defence Aspirants Hey everybody. I am Yogesh Yadav. I have done my schooling from RMS Dholpur. I could not clear … "
    ],
    [
      11,
      "Tips to clear SSB",
      "October 1, 2018",
      "11.jpg",
      "Tips to clear SSB If you are someone who sees himself like a leader of tomorrow then Armed forces provide you with this opportunity at an early age only. The aura of a armed force personal in his/her dress will make them stand out in a crowd. Indian armed forces provide equal opportunity for all …"
    ],
    [
      12,
      "SSC CGL- 2018",
      "May 10, 2018",
      "12.jpg",
      "Staff Selection Commission or SSC has been one of the most desirable organizations for Government exams in India. It conducts Combined Graduate Level – SSC CGL exam every year for recruitment to non-technical Group ‘B’ and Group ‘C’ non gazetted posts in various Ministries/ Departments/ Organizations of the Government of India. Every year thousands of …"
    ],
    [
      13,
      "How to clear screening in SSB?",
      "May 4, 2018",
      "13.png",
      "How to clear screening in SSB? Screening comprises ofIntelligent Test (O.I.R) and Picture Perception & Discussion Test (P.P.D.T.). The tests are conducted with an objective to find out the analysing ability of the candidate and his potential to be a prospective officer. This test helps the board members to filter the candidates and focus on the selected …"
    ],
    [
      14,
      "STORY OF A YOUNGSTER MAKING HIS DESTINY",
      "March 15, 2018",
      "14.jpg",
      "STORY OF A YOUNGSTER MAKING HIS DESTINY No Obstacle is hard enough if one decides to chase his dreams. There has been end number of stories so prove that if one has a will, there is a way for him. This is the Story of a young boy who has become a role model for …"
    ],
    [
      15,
      "Are The Discussions on Tipu jayanti or Mughal monuments relevant in 21 century?",
      "November 1, 2017",
      "15.png",
      "The debate on celebrating the second annual Tipu Jayanti is underway in Karnataka and the political parties are taking the usual ideological positions. The two national parties have taken to the nasty sniping that could easily fuel the kind of acrimony, which has claimed two lives in Kodagu last year over the same issue. Last …"
    ]
  ];
  return dummyData;
}
