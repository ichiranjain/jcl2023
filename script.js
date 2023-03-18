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
          playerLink.href = "#";
          dropdownContent.appendChild(playerLink);
        });

        customDropdown.appendChild(dropdownContent);
        cell.textContent = "";
        cell.appendChild(customDropdown);

        customDropdown.addEventListener("click", function () {
          dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";

            // Toggle the highlight class
            cell.classList.toggle("highlight");

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
