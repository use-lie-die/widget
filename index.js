function createWidget() {
    const formHtml = `
      <h1 class="tag">Where does it come from? Why do we use it?</h1>
      <form class='flex-box'>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div class='flex'>
          <input type="text" id="depart-date" placeholder="Depart date" />
        </div>
        <div class='flex'>
          <input type="text" id="return-date" placeholder="Return date" />
        </div>
        <button type="submit">Search</button>
      </form>
    `;
  
    const container = document.getElementById('widget-container');
    container.innerHTML = formHtml;
  
    flatpickr("#depart-date", {
      dateFormat: "d.m.Y",
      minDate: "today",
    });
  
    flatpickr("#return-date", {
      dateFormat: "d.m.Y",
      minDate: "today",
    });
  }
  
window.onload = createWidget;