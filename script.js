document.addEventListener("DOMContentLoaded", function () {

  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsMenu = document.getElementById("settingsMenu");

  // إضافة مهمة
  window.addTask = function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  };

  // فتح / إغلاق قائمة الإعدادات
  settingsBtn.addEventListener("click", function () {
    if (settingsMenu.style.display === "block") {
      settingsMenu.style.display = "none";
    } else {
      settingsMenu.style.display = "block";
    }
  });

  // اختبار أن JS يعمل
  console.log("JavaScript يعمل بشكل صحيح");

});
