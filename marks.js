// ✅ Example marks data — replace with real roll numbers and marks later
const marksData = {
  "1001": 23,
  "1002": 19,
  "1003": 25,
  "1004": 21,
  "1005": 17
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
    result.textContent = `✅ Roll No: ${rollInput} — Score: ${score} / 25`;
  } else {
    result.textContent = "❌ Roll number not found.";
  }
}
