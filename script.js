document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector("ul");
    const input = document.querySelector("input");
  let a = 0;
    function addNewTodo() {
      const newTodo = document.createElement("li");
      newTodo.innerHTML = `<span class="circle"><img class="hide" src="img/icon-check.svg" alt=""></span>${input.value}`;
      ul.prepend(newTodo);
      input.value = ""; // Очищаем поле ввода после добавления задачи
      addCircleClickListener(newTodo.querySelector(".circle"));
      if(a == 0){
        document.querySelector('#itemsLeft').classList.toggle("default");
        a++;
      }
      const leftPoitn = document.querySelectorAll('li').length - 1;
      document.querySelector('#itemsLeft').innerHTML = `${leftPoitn} items`;
      
    }

    document.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        addNewTodo();
      }
    });
  
    function toggleTask(element) {
      element.classList.toggle("active");
      element.querySelectorAll("img").forEach((item) => {
        item.classList.toggle("hide");
      });
      element.parentElement.classList.toggle("textDecorate");
     
    }
  
    function addCircleClickListener(circleElement) {
      circleElement.addEventListener("click", function () {
        toggleTask(circleElement);
      });
    }
  
    // Добавляем обработчики для уже существующих задач
    document.querySelectorAll(".circle").forEach((circleElement) => {
      addCircleClickListener(circleElement);
    });
  });
  