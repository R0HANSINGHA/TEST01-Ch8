// Sample Roll No and Marks Data (replace with your real data)
const marksData = {
  "101": 23,
  "102": 18,
  "103": 25,
  "104": 21,
  "105": 19
};

function checkMarks() {
  const roll = document.getElementById("rollInput").value.trim();
  const result = document.getElementById("result");

  if (marksData.hasOwnProperty(roll)) {
    result.textContent = `🎉 Your Score: ${marksData[roll]} / 25`;
  } else {
    result.textContent = "❌ Roll Number not found. Please try again.";
  }
}
