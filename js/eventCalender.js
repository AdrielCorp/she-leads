document.addEventListener("DOMContentLoaded", () => {

    const events = {
        "2026-04-18": {
            title: "She Leads Healing Conference",
            description: "Who Heals the Healer: Healing Is a Leadership Strategy."
        },

        "2026-06-16": {
            title: "She Leads AI Hackathon & Impact Conference",
            description: "This is where innovation becomes a justice tool."
        },

        "2026-06-17": {
            title: "She Leads AI Hackathon & Impact Conference",
            description: "This is where innovation becomes a justice tool."
        },

        "2026-06-18": {
            title: "She Leads AI Hackathon & Impact Conference",
            description: "Impact Conference & Solution Showcase"
        },

        "2026-08-09": {
            title: "She Leads Empowerment Conference",
            description: "Women as Economic Actors, Not Afterthoughts."
        },

        "2026-08-29": {
            title: "Leadership Development Workshops",
            description: "From Vision to Execution"
        },

        "2026-09-26": {
            title: "Leadership Development Workshops",
            description: "From Vision to Execution"
        },

        "2026-10-24": {
            title: "Leadership Development Workshops",
            description: "From Vision to Execution"
        },

        "2026-11-13": {
            title: "She Leads 4th Annual Executives Dinner",
            description: "This is an evening of recognition with accountability. Honoured executives are not symbols—they are bridges to the next generation."
        },
    };

    let currentDate = new Date();

    function renderCalendar() {

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        document.getElementById("monthYear").textContent =
            currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric"
            });

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const calendarDates = document.getElementById("calendarDates");
        calendarDates.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            calendarDates.innerHTML += "<div></div>";
        }

        for (let day = 1; day <= lastDate; day++) {

            const dateStr =
                `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            const dayCell = document.createElement("div");
            dayCell.textContent = day;

            if (events[dateStr]) {

                dayCell.classList.add("event");
                dayCell.style.cursor = "pointer";

                dayCell.addEventListener("click", () => {

                    document.getElementById("eventTitle").textContent =
                        events[dateStr].title;

                    document.getElementById("eventDescription").textContent =
                        events[dateStr].description;

                    document.getElementById("eventModal").style.display = "flex";
                });
            }

            calendarDates.appendChild(dayCell);
        }
    }

    // Month navigation
    document.getElementById("prevMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Modal close
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("eventModal").style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target.id === "eventModal") {
            document.getElementById("eventModal").style.display = "none";
        }
    });

    // Initial render
    renderCalendar();

});