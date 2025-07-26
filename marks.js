// ✅ Example marks data — replace with real roll numbers and marks later
const marksData = {
  "20": 4,
  "4": 8,
  "7": 4,
  "12": 8,
  "9": 4,
  "31": 1,
  "17": 3,
  "6": 13,
  "15": 3,
  "5": 13,
  "2": 9,
  "8": 2,
  "1": 20,
  "11": 20,
  "14": 3
  
  
};

document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  checkBtn.addEventListener("click", checkMarks);
});

function checkMarks() {
  const rollInput = document.getElementById("rollInput").value.trim();
  const result = document.getElementById("result");

  if (rollInput === "") {
    result.textContent = "⚠️ Please enter a roll number.";
    return;
  }

  if (marksData.hasOwnProperty(rollInput)) {
    const score = marksData[rollInput];
    result.textContent = ` Roll No: ${rollInput} — Score: ${score} / 25`;
  } else {
    result.textContent = "❌ Roll number not found.";
  }
}
