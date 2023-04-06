window.onload = function () {
  const teamPlayers = {
    "NAMO XI": [
      "Akshay Jain",
      "Bhumir Jhaveri",
      "Chilati Shah",
      "Dhruvik Mehta",
      "Gaurav Jain",
      "Harlik Shah",
      "Harshil Shah",
      "Jay Naik",
      "Mihir Shah",
      "Milap Shah",
      "Paxshal Mehta",
      "Sahil V Shah",
      "Santosh Teegala",
      "Sourabh Oswal",
      "Vaibhav Shah",
    ],
    "AADI XI": [
      "Ankit Sanghavi",
      "Bhavan Mehta",
      "Deep Sutaria",
      "Harsh Mehta",
      "Harsh Vyas",
      "Jay Mehta",
      "Jay Shah",
      "Maulik Bavishi",
      "Naman Barmecha",
      "Nirav Shah",
      "Sandeep Gandhi",
      "Shlok Mehta",
      "Uday shah",
      "Varshit Shah",
      "vishal K shah",
    ],
    "BULLS": [
      "Chintan Chheda",
      "Chirag Shah",
      "Deven Shah",
      "Harsh shah",
      "Harshit Mehta",
      "Pankit Lodaya",
      "Rakesh Shah",
      "Ritesh Patani",
      "Sagar Magia",
      "Sharlik Shah",
      "Shukan Shah",
      "Suhas Mehta",
      "Swetang Shah",
      "Taresh K Parekh",
      "Viral Vora",
    ],
    "KV XI": [
      "Aditya Oswal",
      "Ankit Gosher",
      "Chintan Poladia",
      "Chirag J Kenia",
      "Gaurav Nisar",
      "jaikit savla",
      "Krunal Shah",
      "Kunal Haria",
      "Parth Gala",
      "Prashant Shah",
      "Rohit Palan",
      "Romil",
      "Sohil Shah",
      "Vaibhav Bheda",
      "Vinay Rambhia",
    ],
    "MIBA": [
      "Aniket Sanghvi",
      "Ashish Vora",
      "Bhavin Madhani",
      "Chiran Jain",
      "Jayesh",
      "Jignesh Shah",
      "Jinendra Jain",
      "Kalpesh Sanghvi",
      "Nisarg Modi",
      "Snehil Parekh",
      "Sunil Ranka",
      "Sunny Dugar",
      "Takshil Patel",
      "Varun Shah",
      "Yash Shah",
    ],
    "SAMKIT": [
      "Dhawal Vora",
      "Dhruvil Shah",
      "Harshal J Veera",
      "Het Shah",
      "Milan Shah",
      "Mittal Kothari",
      "Nikunj Mehta",
      "Nitul Haria",
      "Raunak Banthia",
      "Romil Gandhi",
      "Ronak",
      "Sagar Vora",
      "Sanket",
      "Simit Shah",
      "Yash Parikh",
    ],
    "VEER XI": [
      "Abhi Bakliwal",
      "Amit Rote",
      "Ankur avlani",
      "Deepak Shah",
      "harshit jain",
      "Jigar",
      "Kashish Shah",
      "Manan Doshi",
      "Maulik Gandhi",
      "Mitesh Bhawsar",
      "Mudit Khasgiwala",
      "Nilay",
      "Pratik Shah",
      "Sameer Shah",
      "Vrushank Shah",
    ],
  };

  const playerIds = {
    // NAMO XI
    "Akshay Jain": "",
    "Bhumir Jhaveri": "297280",
    "Chilati Shah": "2648797",
    "Dhruvik Mehta": "",
    "Gaurav Jain": "297344",
    "Harlik Shah": "2568152",
    "Harshil Shah": "297350",
    "Jay Naik": "",
    "Mihir Shah": "577788",
    "Milap Shah": "",
    "Paxshal Mehta": "",
    "Sahil V Shah": "2568734",
    "Santosh Teegala": "516295",
    "Sourabh Oswal": "",
    "Vaibhav Shah": "2568708",
    // AADI XI
    "Ankit Sanghavi": "",
    "Bhavan Mehta": "2568674",
    "Deep Sutaria": "503812",
    "Harsh Mehta": "1063094",
    "Harsh Vyas": "",
    "Jay Mehta": "1193303",
    "Jay Shah": "316044",
    "Maulik Bavishi": "2566924",
    "Naman Barmecha": "",
    "Nirav Shah": "2567515",
    "Sandeep Gandhi": "297283",
    "Shlok Mehta": "2567416",
    "Uday shah": "297353",
    "Varshit Shah": "",
    "vishal K shah": "2568824",
    // BULLS
    "Chintan Chheda": "2569972",
    "Chirag Shah": "297342",
    "Deven Shah": "295406",
    "Harsh shah": "297351",
    "Harshit Mehta": "",
    "Pankit Lodaya": "",
    "Rakesh Shah": "295404",
    "Ritesh Patani": "295408",
    "Sagar Magia": "297272",
    "Sharlik Shah": "297348",
    "Shukan Shah": "517139",
    "Suhas Mehta": "2568758",
    "Swetang Shah": "",
    "Taresh K Parekh": "320285",
    "Viral Vora": "297271",
    // KV XI
    "Aditya Oswal": "2568806",
    "Ankit Gosher": "3066482",
    "Chintan Poladia": "297321",
    "Chirag J Kenia": "297316",
    "Gaurav Nisar": "516290",
    "jaikit savla": "516291",
    "Krunal Shah": "516292",
    "Kunal Haria": "345719",
    "Parth Gala": "297320",
    "Prashant Shah": "297322",
    "Rohit Palan": "528742",
    "Romil": "297323",
    "Sohil Shah": "2568673",
    "Vaibhav Bheda": "2568663",
    "Vinay Rambhia": "297324",
    // MIBA
    "Aniket Sanghvi": "1173819",
    "Ashish Vora": "3266045",
    "Bhavin Madhani": "528312",
    "Chiran Jain": "297336",
    "Jayesh": "2567511",
    "Jignesh Shah": "2568751",
    "Jinendra Jain": "",
    "Kalpesh Sanghvi": "1173817",
    "Nisarg Modi": "297268",
    "Snehil Parekh": "2568755",
    "Sunil Ranka": "297339",
    "Sunny Dugar": "1173815",
    "Takshil Patel": "",
    "Varun Shah": "528342",
    "Yash Shah": "2568515",
    // SAMKIT
    "Dhawal Vora": "1750674",
    "Dhruvil Shah": "",
    "Harshal J Veera": "297313",
    "Het Shah": "1599549",
    "Milan Shah": "297341",
    "Mittal Kothari": "297340",
    "Nikunj Mehta": "295405",
    "Nitul Haria": "297317",
    "Raunak Banthia": "",
    "Romil Gandhi": "2567154",
    "Ronak": "297347",
    "Sagar Vora": "297279",
    "Sanket": "",
    "Simit Shah": "503452",
    "Yash Parikh": "516297",
    // VEER XI
    "Abhi Bakliwal": "2567153",
    "Amit Rote": "",
    "Ankur avlani": "2570064",
    "Deepak Shah": "534695",
    "harshit jain": "2567158",
    "Jigar": "1193304",
    "Kashish Shah": "",
    "Manan Doshi": "1173893",
    "Maulik Gandhi": "1173892",
    "Mitesh Bhawsar": "529110",
    "Mudit Khasgiwala": "297289",
    "Nilay": "511982",
    "Pratik Shah": "2569980",
    "Sameer Shah": "1173895",
    "Vrushank Shah": ""
  };

  const clubId = "848";
  const tableRows = document.querySelectorAll("table tr");

  tableRows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    cells.forEach((cell) => {
      const teamName = cell.textContent;
      if (teamPlayers.hasOwnProperty(teamName)) {
        const customDropdown = document.createElement("div");
        customDropdown.classList.add("custom-dropdown");
        customDropdown.innerHTML = `<span>${teamName}<span class="arrow-icon"></span></span>`;

        const dropdownContent = document.createElement("div");
        dropdownContent.classList.add("dropdown-content");

        teamPlayers[teamName].forEach((player) => {
          const playerLink = document.createElement("a");
          playerLink.textContent = player;
          if (playerIds[player]) {
            playerLink.href = `https://cricclubs.com/jcncleague/viewPlayer.do?playerId=${playerIds[player]}&clubId=${clubId}`;
            playerLink.classList.add("player-link");
          } else {
            playerLink.href = "#";
            playerLink.classList.add("greyed-out");
          }
          dropdownContent.appendChild(playerLink);
        });


        customDropdown.appendChild(dropdownContent);
        cell.innerHTML = "";
        cell.classList.add("custom-dropdown-cell");
        cell.appendChild(customDropdown);

        customDropdown.addEventListener("click", function () {
          dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";

          // Toggle the active class
          customDropdown.classList.toggle("active");
        });

        // Close the dropdown when clicking outside
        document.addEventListener("click", function (event) {
          if (!customDropdown.contains(event.target)) {
            dropdownContent.style.display = "none";
          }
        });
        
      }
    });
  });
};
