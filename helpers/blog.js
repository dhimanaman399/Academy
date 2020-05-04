module.exports = {
  BlogPage: () => {
    // [SNo , "Title" , "Date" , "Image" , "Dec"]
    return BlogPageData();
  },
  BlogDetails: no => {
    let data = BlogPageData();
    let index = -1;
    data.forEach((ele, i) => {
      console.log(no, " ::: ", ele[0]);
      if (ele[0] == no) {
        index = i;
      }
    });
    if (index == -1) {
      index = 0;
    }
    let blogdata = {
      no : no,
      title: data[index][1],
      data: data[index][2],
      image: data[index][3],
      description: data[index][4]
    };
    return blogdata;
  }
};

function BlogPageData() {
  let dummyData = [
    [
      1,
      "MY STORY- 1HARSH SHEORAN",
      "October 11, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      2,
      "MY STORY- 2 HARSH SHEORAN",
      "October 12, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      3,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      4,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      5,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      6,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      7,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      8,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      9,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      10,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      11,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      12,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      13,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      14,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      15,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      16,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      17,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      18,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      19,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      20,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      21,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      22,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      23,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      24,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      25,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      26,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      27,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      28,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      29,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      30,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      31,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      32,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ],
    [
      33,
      "MY STORY- HARSH SHEORAN",
      "October 1, 2019",
      "1.png",
      "“Some Goals Are So Worthy. It’s glorious even to fail”. These Golden lines by Captain Manoj Kumar Pandey Always kept me going. I am Sahil Datt, currently a GC at OTA Chennai. Coming from a civilian background but having picked up interest in Army as a child, I gave my NDA exam thrice but couldn’t …"
    ]
  ];
  return dummyData;
}
